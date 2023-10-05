'use client'
import { useState } from "react";

export default function NewPage() {
  const [image, setImage] = useState('');
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const examCreator = (e) => {
    if (text) {
      e.preventDefault();
      setItems([...items, text]);
      setText("");
    }
  }
  
  const imageLoadHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onload = () => setImage(reader.result);
  }

  const autoSizeTextArea = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }
  
  const deleteHandler = (e) => {
    e.target.parentNode.remove();
  }
  
  return (
    <div>
      <form action="/api/problem/new" method="POST">
        <div className="new">
          <h2>제목</h2>
          <p><input name="name" type="text" style={{height:"30px", width:"320px", marginBottom:"10px"}} required/></p>
          <h2>문제</h2>
          <textarea name="question" onChange={autoSizeTextArea} style={{fontSize:"20px", fontFamily:"sans-serif", width:"530px"}} required/>
          <center><div style={{width:'600px'}}><img style={{width:"200px"}} src={image}/></div></center>
          <div><label>사진: </label><input type="file" onChange={imageLoadHandler}></input></div>
          <div>
          <h2>보기</h2>
          {
            items.map((item, i) => {
              return (
                <div key={i}>
                  <input type="hidden" name="exam" value={item}/>
                  <input type="checkbox" name="correct" value={item}/> {item} 
                  <button type="button" className="Btn" onClick={deleteHandler}>보기 삭제</button>
                </div>
              )}
            )
          }
          </div>
          <p><input  style={{width:'530px', height:'50px'}}
                  type="text"
                  value={text} // 입력 상태 반영
                  onChange={(e)=>{
                    setText(e.target.value);
                  }}
          /></p>
          <p><button type='button' className="Btn" onClick={examCreator}>보기 추가</button></p>
          <input type="hidden" name="img" value={image}/>
        </div>
        {
          items.length >=2 ? <center><button className="Btn" type="submit">등록</button></center> : ""
        }
      </form>
    </div>
  )
}