import { User } from "../users/page"

type Props = {
    user: User
    onDelete:(id:string) => void
}

export default function UserItem({user,onDelete}:Props){
    return (
    <div>
        <li>{user.name}</li>
        <button onClick={()=>onDelete(user._id)}>delete</button>
    </div>
)
}