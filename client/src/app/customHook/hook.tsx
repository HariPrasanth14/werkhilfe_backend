import axios, { AxiosResponse } from "axios"
import { useCallback, useEffect, useState } from "react"

export type User = {
    name:string
    id:number
}

export function useUsers(url:string){
    const [users,setUsers] = useState<User[]>([])
        const [loading , setLoading] = useState(true)
    
        useEffect(()=>{
            const fetchUsers = async() => {
                const res:AxiosResponse<User[]> = await axios.get<User[]>(url)
                setUsers(res.data)
                setLoading(false)
            }
            fetchUsers()
        },[url])

         const deleteUser = useCallback((id:number) => (
        setUsers((users)=>users.filter(key=>key.id!==id))
    ),[])

        return { users , loading , deleteUser}
}