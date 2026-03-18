import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function BoardLayout({children}:Props){
    return(
        <div style={{
            display:"flex"
        }}>
            <div style={{
                width:"200px",
                background:"#eee"
            }}>
                <p>Board</p>
                <p>Users</p>
                <p>Settings</p>
            </div>

            <div style={{
                padding:"20px",
                flex:1
            }}>
                {children
                }
            </div>
        </div>
    )
}