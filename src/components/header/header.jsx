import React from 'react'
import logo from '../../assets/logog.png'
import './header.css'
import CTA from './CAT'
import Social from './headersocial'

const index = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello there</h5>
        <h5>I am</h5>
        <h1>Gnaneswar.</h1>
        <CTA/>
        <div className='me'>
          <img className='mee' src={logo} alt='logo'/>
        </div>
        <a className='scroll__down' href='#contact'>Scroll Down</a>
        <Social/>
        </div>
    </header>
  )
}

export default index