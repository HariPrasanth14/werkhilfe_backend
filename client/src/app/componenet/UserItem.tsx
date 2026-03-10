import { User } from "../users/page"

type Props = {
    user: User
}

export default function UserItem({user}:Props){
    return <li>{user.name}</li>
}