import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){
  let cpBody = {...req.body}
  delete cpBody._id;
  const db = await client.db('exam');
  const result = await db.collection('problem').updateOne({_id:new ObjectId(req.body.id)},
  {$set: {...cpBody}}
  )
  res.redirect(302, `/detail/${req.body.id}`);
}