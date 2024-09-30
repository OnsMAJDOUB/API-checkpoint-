import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import UserCard from './UserCard'
const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data) )
        .catch((err) => console.log(err))
    })
  return (
    <div className='flex justify-center gap-10 flex-wrap'>
        {users.map((user) => (
           <UserCard user={user} key={user.id}/>
        ))}

    </div>
  )
}

export default UserList