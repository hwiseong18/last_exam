import client from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Detail({params}) {
  const db = await client.db('exam');
  const result = await db.collection('problem').findOne({'_id':new ObjectId(params.id)})
  return (
    <>
      <center><div className='problem'>
      </div></center>
    </>
  )
}