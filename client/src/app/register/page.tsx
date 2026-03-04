"use client"

import React, { useState } from 'react'

function RegisterForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setForm((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const handleSubmit = () => {
        if (!form.name || !form.email || !form.password) {
            alert("All fields required");
            return;
        }
        alert(JSON.stringify(form,null,9))
    }
    return (
        <div>
            <h1>Register Form</h1>
            <input type="text" onChange={handleChange} name="name" id="" placeholder='Name' value={form.name} />
            <br /><br />
            <input type="text" onChange={handleChange} name='email' id='' placeholder='email' value={form.email} />
            <br /><br />
            <input type="text" onChange={handleChange} name="password" id="" placeholder='"password' />
            <br /><br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default RegisterForm
