import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillSunFill} from 'react-icons/bs'
import {TbMessages} from 'react-icons/tb'

const TopNav = () => {
    return (
        <>
            <nav className='h-[80px] flex items-center justify-between px-8 shadow-md z-10'>
                <Link to='/'><div className="title3 font-semibold flex items-center">
                    <span className='bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center'>S</span>ublimo
                </div></Link>
                <div className="menu_options flex items-center space-x-4">
                    <Link className='font-normal text-primary' to='/login'>Login</Link>
                    <div className="icon text-[1.2rem] p-3 rounded-full bg-white cursor-pointer border border-gray-300"><BsFillSunFill/></div>
                    <div className="icon text-[1.2rem] p-3 rounded-full bg-white cursor-pointer border border-gray-300"><TbMessages/></div>
                    <div className="admin_profile flex space-x-4 px-4 py-2 cursor-pointer bg-[#ffffff50] border-2 border-b-0 border-white rounded-lg backdrop-blur-[20px] shadow-md ">
                        <div className="admin_picture h-12 w-12 overflow-hidden rounded-full bg-gray-300 text-center leading-[3rem] text-xl font-semibold">
                            <img className='ob object-cover' src={'./avatar.avif'}/>
                        </div>
                        <div className="admin_info">
                            <div className="name font-semibold text-md">Yasir Rahman</div>
                            <div className="title text-sm text-gray-500">Administor</div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default TopNav