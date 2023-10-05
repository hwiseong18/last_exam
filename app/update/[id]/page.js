import client from "@/util/database";
import { ObjectId } from "mongodb";
import UpdatePage from "./updatePage";

export default async function Update({params}) {
  const db = await client.db('exam');
  const result = await db.collection('problem').findOne({_id:new ObjectId(params.id)})
  return (
    <div>
      <UpdatePage result={result}/>
    </div>
  )
}