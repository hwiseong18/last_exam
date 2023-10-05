import Link from "next/link"
import client from "@/util/database"
import ListItem from "./listItem";


export default async function List() {
  const db = await client.db('exam');
  const list = await db.collection('problem').find().toArray();
  return (
    <div>
      <center><h2 style={{padding:"15px", margin:"15px"}}>여기가 목록</h2></center>
      <div className="list">
        {
          list.map(e=><ListItem name={e.name} id={e._id}/>)
        }
      </div>
    </div>
  )
}