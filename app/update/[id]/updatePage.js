'use client'
import { useState } from "react";

export default function UpdatePage({result}) {
  const [image, setImage] = useState(result.img);
  const [items, setItems] = useState(result.exam);
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
      <form action="/api/problem/edit" method="POST">
        <div className="new">
          <h2>문제</h2>
          <p><input name="name" defaultValue={result.name} type="text" style={{height:"30px", width:"320px", marginBottom:"10px"}} required/></p>
          <textarea name="question" defaultValue={result.question} onChange={autoSizeTextArea} style={{fontSize:"20px", fontFamily:"sans-serif", width:"530px"}} required/>
          <div style={{width:'600px'}}><img style={{width:"200px"}} src={image}/></div>
          <div><label>사진: </label><input type="file" onChange={imageLoadHandler}></input></div>
          <div>
          <h2>보기</h2>
          {
            items.map((item, i) => {
              return (
                <div key={i}>
                  <input type="hidden" name="exam" value={item}/>
                  {
                    result.correct.includes(item) ?
                    <><input type="checkbox" name="correct" value={item} defaultChecked/> {item} </>:
                    <><input type="checkbox" name="correct" value={item}/> {item} </>
                  }
                  <button type="button" onClick={deleteHandler}>보기 삭제</button>
                </div>
              )}
            )
          }
          </div>
          <input  style={{width:'530px', height:'50px'}}
                  type="text"
                  value={text} // 입력 상태 반영
                  onChange={(e)=>{
                    setText(e.target.value);
                  }}
          />
          <button type='button' onClick={examCreator}>보기 추가</button>
          <input type="hidden" name="img" value={image}/>
          <input type="hidden" name="id" value={result._id.toString()} />
        </div>
        {
          items.length >=2 ? <button type="submit">수정</button> : ""
        }
      </form>
    </div>
  )
}