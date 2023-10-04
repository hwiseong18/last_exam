'use client'
import { useState } from "react";

export default function New() {
  const [image, setImage] = useState(null);
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const imageLoadHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onload = () => setImage(reader.result);
  }

  const ShortAnswerMaker = (e) => {
    setItems([...items, text]);
    setText('');
    console.log(items)
  }

  return (
    <div>
      <center><h2 style={{margin: '15px', padding:'10px'}}>Problem Registration</h2></center>
      <center><form action="/api/problem/new" method="POST">
        <div><input style={{width:"600px", height:'100px'}} type="text"/></div>
        <div style={{widows:'600px'}}><img style={{width:"200px"}} src={image}/></div>
        <div><label>사진: </label><input type="file" onChange={imageLoadHandler}></input></div>

        {items.map((item,index)=> {
          <div key={index}><input type="checkbox"/> {item}</div>
        })}

        <input style={{width:'530px', height:'50px'}} type="text" onChange={(e)=>{
          setText(e.target.value);
        }}/> 
        
        <button style={{height:'55px'}} onClick={ShortAnswerMaker}>보기 추가</button>
        
        <input type="hidden" name="img" value={image}/>
        <div><button type="submit">추가</button></div>
      </form></center>
    </div>
  )
}