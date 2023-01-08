import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaWhatsappSquare, FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa'
import {BsGithub,} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>GNANESWAR</a>

      <ul className='permalinks'>
        <li> <a href='#'>Home</a></li>
        <li> <a href='#about'>About</a></li>
        <li> <a href='#experience'>Experience</a></li>
        <li> <a href='#portfolio'>Portfolio</a></li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__social">
      <a href='https://www.linkedin.com/in/gnan-eswar-286995192' target="_blank"><AiFillLinkedin/></a>
        <a href='https://wa.me/919553522407?text=' target="_blank"><FaWhatsappSquare/></a>
        <a href='https://twitter.com/Gnan54189007?t=grxxwoit3azwvzGDDM9mEw&s=09' target="_blank"><FaTwitterSquare/></a>
        <a href='https://www.instagram.com/s_g_eswar' target="_blank"><FaInstagramSquare/></a>
      </div>
      <div className="footer__endtext">
        <small>This website is made by S.Gnaneswar. All the data in this website is Legit</small>
        <small>This website is made using React.js and Css</small>
      </div>
    </footer>
  )
}

export default footer