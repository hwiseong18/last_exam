import client from "@/util/database"
import { ObjectId } from "mongodb";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Link from "next/link";

export default async function Detail({params}) {
  const db = await client.db('exam');
  const problem = await db.collection('problem').findOne({'_id':new ObjectId(params.id)})
  const session = await getServerSession(authOptions);
  return(
    <div className="new">
      <h1>제목 : {problem.name} </h1>
      <div>작성자 : {problem.author?.name} </div>
      <div><img style={{width:"200px"}} src={problem.img ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlDwPM7Mag_dUXHUmW1TzLHZ8wXZTFOlqm2aRsuLYRw&s"}/></div>
      <h2>문제 : {problem.question} </h2>
      <h2>보기</h2>
      <form action="/api/problem/check" method="POST">
        {
          problem.exam.map((item, i) => {
            return (
              <div key={i}>
                <input type="checkbox" name="exam" value={item}/> {item}
              </div>
            )
          })
        }
        <input type="hidden" value={params.id} name="id"/>
        <button className="Btn" type="submit">확인</button>
      </form>
      {
        session && (problem.author?.email === session?.user.email)
        ?
        <div>
          <Link href={`/update/${params.id}`}><button className="Btn"> 수정 </button></Link>
          <Link href={`/api/problem/delete/?id=${params.id}`}><button className="Btn"> 삭제 </button></Link>
        </div>
        : ""
      }
    </div>
  )
}