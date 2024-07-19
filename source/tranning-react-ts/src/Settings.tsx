import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Settings() {
  return (
    <div>
        <h1>Header</h1>
            <Outlet />
        <h2>Footer</h2>
    </div>
  )
}
