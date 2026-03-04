"use client"
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useState } from 'react'

function FormField() {
    const [name, setName] = useState<string>("")
    const router = useRouter()
    const [nameList, SetNameList] = useState<string[]>([])

    const goDashboard = () =>{
        router.push("/dashboard")
    }
    function addNameList(e: FormEvent): void {
        e.preventDefault()
        if(!name.trim()){
            alert("Enter a valid name")
        }
        if (name.trim()) {
            SetNameList([...nameList, name])
            setName("")
            alert(`New Name added ${name}`)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value)
    }
    return (
        <div>
            <div className='bg-blue-500'>
                {name ? name : "Name will be displayed here"}
            </div>
            <form action="">
                <label htmlFor="name">Name </label>
                <input type="text" value={name} placeholder='enter your name' onChange={handleChange} />
                <button onClick={addNameList}>Click</button>
            </form>

            <ul>
                <li className='text-2xl'>
                    <h2>Name List</h2>
                </li>
                     {nameList.map((data:string)=>(
                        <li>{data}</li>
                     ))}
             </ul>
             <button onClick={goDashboard}>Dashboard</button>
        </div>
    )
}

export default FormField
