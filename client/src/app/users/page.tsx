"use client"

import { useEffect, useState } from "react"
import UserList from "../componenet/UserList";
import UserItem from "../componenet/UserItem";

export type User = {
    _id: string,
    name: string,
    email: string,
    password: string
}
console.log("env",process.env.BACKEND);

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true)
                const response = await fetch(
                    `http://localhost:4001/api/v1/auth/all_user`
                )
                const data = await response.json()
                console.log("user data",data)
                setUsers(data?.records)
            } catch (err) {
                setError("failed to fetch")
            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])
    if(loading)return <p>Loading Users...</p>
    if(error)return <p>{error}</p>
    return(
        <div>
            <h1>User List</h1>
            {/* <ul>
                {
                Array.isArray(users) && users?.map((user)=>(
                    <li key={user._id}>{user.name}</li>
                ))}
            </ul> */}
            {/* <UserList users={users} /> */}
            <UserItem user={users[0]}/>
        </div>
    )
}