import client from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Delete(req, res){  
  const id = req.query.id
  const db = await client.db('exam');
  const result = await db.collection('problem').deleteOne({_id: new ObjectId(id)})
  
  return res.redirect(302, '/list');
}