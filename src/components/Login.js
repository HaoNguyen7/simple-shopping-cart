import React, { useState } from 'react'

const Login = ({ login }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        login({ email, password })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button>Login</button>
        </form>
    )
}

export default Login