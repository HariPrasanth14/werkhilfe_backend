import { User } from "../users/page";
import UserItem from "./UserItem";


type Props = {
    users:User[],
    onDelete:(id: string) => void
}

export default function UserList({users,onDelete}:Props){
    return(
        <ul>
            {Array.isArray(users) && users.map((user)=>(
                 <UserItem key={user._id} user={user} onDelete={onDelete}/>
            ))}
        </ul>
    )
}