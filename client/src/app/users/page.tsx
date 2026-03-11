"use client"

import { useEffect, useState } from "react"
import UserList from "../componenet/UserList";
import UserItem from "../componenet/UserItem";
import SearchBox from "../componenet/SearchBox";

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
    const [search, setSearch] = useState("")

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

    const filterUserName = users.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase())
    )

    const deleteUser = (id:string) => (
        setUsers((user)=>user.filter(key=>key._id!==id))
    )
    return(
        <div>
            <h1>User List</h1>
            <SearchBox search={search} setSearch={setSearch} />
             {/* <ul>
                {
                Array.isArray(users) && users?.map((user)=>(
                    <li key={user._id}>{user.name}</li>
                ))}
            </ul>  */}
            <UserList users={users} onDelete={deleteUser}/>
            {/* <UserItem user={users[0]}/> */}
        </div>
    )
}