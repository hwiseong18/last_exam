import client from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Detail({params}) {
  const db = await client.db('exam');
  const result = await db.collection('problem').findOne({'_id':new ObjectId(params.id)})
  return (
    <>
      <h2 style={{padding:"15px", margin:"15px"}}>여기가 상세</h2>
      <center><div className='detail'>
        <div>{result.content}</div>
        <div>{result.img}</div>
        <div>1. {result.first}</div>
        <div>2. {result.second}</div>
        <div>3. {result.third}</div>
        <div>4. {result.fourth}</div>
      </div></center>
    </>
  )
}