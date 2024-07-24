import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarLeft from './comm/SidebarLeft'
import Header from './comm/Header'

export default function Layout() {
    return (
        <div className='d-flex'>
            <div className='col-2'>
                <SidebarLeft />
            </div>
            <div className='col-10'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}
