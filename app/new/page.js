import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import NewPage from './newPage';

export default async function New() {
  const session = await getServerSession(authOptions);
  return (
    <>
      { session ? <NewPage/> : <h1>로그인 하세요</h1>}
    </>
  )
}