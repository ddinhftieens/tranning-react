import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import DemoRouterHome from './DemoRouterHome'
import DemoRouterAbout from './DemoRouterAbout'
import DemoRouterContact from './DemoRouterContact'

export default function DemoRouter2() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<DemoRouterHome />} />
                <Route path='/about' element={<DemoRouterAbout />} />
                <Route path='/contact' element={<DemoRouterContact />} />
            </Routes>
        </div>
    )
}
