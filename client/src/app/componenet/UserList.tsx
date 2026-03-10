import { User } from "../users/page";
import UserItem from "./UserItem";


type Props = {
    users:User[]
}

export default function UserList({users}:Props){
    return(
        <ul>
            {Array.isArray(users) && users.map((user)=>(
                 <UserItem key={user._id} user={user}/>
            ))}
        </ul>
    )
}