'use client'

import { userState } from "@/app/recoil/atoms"
import { useRecoilState } from "recoil"

export default function UserUpdatePage() {
  const [user, setUser] = useRecoilState(userState)

  return (
    <div>
      <h1>UpdateUserPage</h1>
      <input 
        onChange={(e) => setUser((prevState) => ({...prevState, email: e.target.value}))} 
        type="email" 
        value={user.email}
      />
      <input 
        type="text" 
        value={user.name}
        onChange={(e) => {
          setUser((prevState) => ({...prevState, name:e.target.value}))
        }}
      />
    </div>
  )
}