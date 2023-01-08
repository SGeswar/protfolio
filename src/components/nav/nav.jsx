import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser,AiOutlineMessage} from 'react-icons/ai'
import {GiProgression} from 'react-icons/gi'
import {TbBrandPython} from 'react-icons/tb'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiProgression/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><TbBrandPython/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav