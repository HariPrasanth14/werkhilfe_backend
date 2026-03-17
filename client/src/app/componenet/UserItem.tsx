import { useCallback } from "react"
import { User } from "../customHook/hook"

type Props = {
    user: User
    onDelete:(id:number) => void
}

export default function UserItem({user,onDelete}:Props){
    
    return (
    <div>
        <li>{user.name}</li>
        <button onClick={()=>onDelete(user.id)}>delete</button>
    </div>
)
}