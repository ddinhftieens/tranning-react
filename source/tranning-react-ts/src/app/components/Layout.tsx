import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout() {
    const navigate = useNavigate();

    const redirect = (url: string) => {
        navigate(url)
    }

    return (
        <div>
            <nav>
                <ul>
                    <li onClick={() => redirect("/dashboard")}>
                        Home
                    </li>
                    <li onClick={() => redirect("/about")}>
                        About
                    </li>
                    <li onClick={() => redirect("/contact")}>
                        Contact
                    </li>
                </ul>
            </nav>
            <div className='text-center'>
                <Outlet />
            </div>
        </div>
    )
}
