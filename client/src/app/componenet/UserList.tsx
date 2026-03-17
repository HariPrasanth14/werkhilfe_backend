import UserItem from "./UserItem";
import { User } from "../customHook/hook";

type Props = {
    users:User[],
    onDelete:(id: number) => void
}

export default function UserList({users,onDelete}:Props){
    return(
        <ul>
            {Array.isArray(users) && users.map((user)=>(
                 <UserItem key={user.id} user={user} onDelete={onDelete}/>
            ))}
        </ul>
    )
}