import client from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Detail({params}) {
  const db = await client.db('exam');
  const result = await db.collection('problem').find({'_id':new ObjectId(params.id)})
  return (
    <div className="detail">
      {result.content}
    </div>
  )
}