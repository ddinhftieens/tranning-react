import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();

    const redirectProfile = () => {
        navigate("/sett/sett-001?token=123")
    }
    return (
        <>
            <div>Home</div>
            <button onClick={redirectProfile}>View profile</button>
        </>
    )
}
