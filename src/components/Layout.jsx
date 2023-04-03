import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from './TopNav'
import SideNav from './SideNav'

const Layout = () => {
    return (
        <>
            <div className='App'>

                <TopNav />

                <main className='flex-1 flex'>
                    <SideNav/>

                    <div className='bg-gray-100 flex-1'>
                        <Outlet/>
                    </div>
                </main>


            </div>
        </>
    )
}

export default Layout