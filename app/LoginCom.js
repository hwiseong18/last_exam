'use client'
import { signIn, signOut } from "next-auth/react"

function LoginCom(){
  return(
    <p onClick={()=>{signIn()}}>로그인</p>
  )
}

function LogoutCom(){
  return(
    <p onClick={()=>{signOut()}}>로그아웃</p>
  )
}

export { LoginCom, LogoutCom }