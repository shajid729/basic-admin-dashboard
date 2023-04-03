import React, { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {IoGridOutline} from 'react-icons/io5'
import {FaGraduationCap} from 'react-icons/fa'
import {AiOutlineUserSwitch} from 'react-icons/ai'
import {SiGoogleclassroom} from 'react-icons/si'
import {BsJournalBookmark} from 'react-icons/bs'
import {ImClipboard} from 'react-icons/im'
import {FiSettings} from 'react-icons/fi'

const SideNav = () => {
    return (
        <>
            <menu className='bg-green-40s0 max-w-[300px] space-y-2 p-4 bg-primary text-white'>
                <MenuItem icon={<IoGridOutline/>} name="Dashboard" to='/' />
                <MenuItem icon={<FaGraduationCap/>} name="Students" to='/students' />
                <MenuItem icon={<AiOutlineUserSwitch/>} name="Teachers" to='/teachers' />
                <MenuItem icon={<SiGoogleclassroom/>} name="Class list" to='/class' />
                <MenuItem icon={<BsJournalBookmark/>} name="Subject list" to='/subject' />
                <MenuItem icon={<ImClipboard/>} name="Exam list" to='/exam' />
                <MenuItem icon={<FiSettings/>} name="Settings" to='/setting' />
            </menu>
        </>
    )
}

export default SideNav


const MenuItem = ({icon,name,to}) => {
    const {pathname} = useLocation() 
    return (
        <>
            <NavLink to={to} className={`item flex items-center space-x-4 px-4 py-3 cursor-pointer rounded-md ${pathname==to ? 'bg-[#456fd5]' : 'hover:bg-[#4D7EF5]'}`}>
                <div className="icon text-xl">{icon}</div>
                <div className="item_name text-[1rem] font-normal">{name}</div>
            </NavLink>
        </>
    )
}