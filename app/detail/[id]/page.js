import client from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Detail({params}) {
  const db = await client.db('exam');
  const result = await db.collection('problem').findOne({'_id':new ObjectId(params.id)})
  return (
    <>
      <center><div className='problem'>
        <div>{result.content}</div>
        <div>{result.img}</div>
      </div>
      <div className="bogi">
        <div>1. {result.first}</div>
        <div>2. {result.second}</div>
        <div>3. {result.third}</div>
        <div>4. {result.fourth}</div>
      </div></center>
    </>
  )
}