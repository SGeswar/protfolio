import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaWhatsappSquare,FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa'
import {BsGithub,} from 'react-icons/bs'

const headersocial = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/gnan-eswar-286995192' target="_blank"><AiFillLinkedin/></a>
        <a href='https://github.com/SGeswar' target="_blank"><BsGithub/></a>
        <a href='https://wa.me/919553522407?text=' target="_blank"><FaWhatsappSquare/></a>
        <a href='https://twitter.com/Gnan54189007?t=grxxwoit3azwvzGDDM9mEw&s=09' target="_blank"><FaTwitterSquare/></a>
        <a href='https://www.instagram.com/s_g_eswar' target="_blank"><FaInstagramSquare/></a>

    </div>
  )
}

export default headersocial