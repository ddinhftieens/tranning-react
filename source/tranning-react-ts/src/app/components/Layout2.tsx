import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout2() {

    const navigate = useNavigate()

    const redirect = (url: string) => {
        navigate(url)
    }

    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li onClick={() => redirect("/dashboard")}>
                            Home
                        </li>
                        <li onClick={() => redirect("/about?access_token=9999&page=11111&detailId=1")}>
                            About
                        </li>
                        <li onClick={() => redirect("/contact")}>
                            Contact
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='text-center'>
                <div>
                    header
                </div>
                <Outlet />
                <div>
                    footer
                </div>
            </div>
        </>
    )
}
