import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){
  const db = await client.db('exam');
  const result = await db.collection('problem').findOne({"_id":new ObjectId(req.body.id)})
  if(result.correct === req.body.exam)
    return res.redirect(302, "/message/correct")
  else
    return res.redirect(302, "/message/wrong")

}