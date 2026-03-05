"use client"

import { ChangeEvent, useState } from "react"

type Todo = {
    id:number,
    text:string
}
export default function ListItems(){
    let [input, setInput] = useState<string>("")
    let [newTodo,setTodo] = useState<Todo[]>([])
    const addItems = () => {
        if(!input.trim())return
        const newTodo :Todo = {
            id:Date.now(),
            text:input
        }
        setTodo((prev)=>[...prev,newTodo])
        setInput("")
    }
    return(
        <div>
            <input type="text" value={input} name="text" placeholder="Enter Item" onChange={(e)=>setInput(e.target.value)}/>
            <br />
            <button onClick={addItems}>submit</button>
            <ul>
                {newTodo.map((items)=>(
                    <li>
                        {items.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}