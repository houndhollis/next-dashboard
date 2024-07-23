'use client';

import { userState } from "@/app/recoil/atoms"
import { useRecoilValue } from "recoil";

export default function UpdatedUser(){
  const user = useRecoilValue(userState);

  
  return (
    <div>
      <h1>updated Users</h1>
      <div>유저 네임 :{user.name}</div>
      <div>유저 이메일 : {user.email}</div>
    </div>
  
  )
}