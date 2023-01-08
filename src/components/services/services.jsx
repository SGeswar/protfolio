import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
            <div className="service__head">
                <h3>Web & App Development</h3>
            </div>
            <ul className='service__list'>
                <li>
                    <BsCheckLg className='service__list-icon'/>
                    <p>Build and deploy a interactive Website and Blogs</p>
                </li>
                <li>
                    <BsCheckLg className='service__list-icon'/>
                    <p>Build and deploy a interactive Apps for mobiles</p>
                </li>
                <li>
                    <BsCheckLg className='service__list-icon'/>
                    <p>Writing code for sites, typically HTML or JavaScript </p>
                </li>
                <li>
                    <BsCheckLg className='service__list-icon'/>
                    <p>Recently started learning React Js and react native</p>
                </li>
            </ul>
        </article>

        <article className='service'>
            <div className="service__head">
                <h3>Robotics</h3>
            </div>
            <ul className='service__list'>
                <li>
                    <BsCheckLg className='service__list-icon'/>
                    <p>Providing solutions to the realworld problems</p>
                </li>
                <li>
                    <BsCheckLg className='service__list-icon'/>
                    <p>Build home automation and security equipment</p>
                </li>
                <li>
                    <BsCheckLg className='service__list-icon'/>
                    <p>Conducting seminar for large group of people</p>
                </li>
                <li>
                    <BsCheckLg className='service__list-icon'/>
                    <p>Currently working few patent using electronics</p>
                </li>

            </ul>
        </article>

        <article className='service'>
            <div className="service__head">
                <h3>Content Creation</h3>
            </div>
            <ul className='service__list'>
                <li>
                    <BsCheckLg className='service__list-icon'/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.!</p>
                </li>
                <li>
                    <BsCheckLg className='service__list-icon'/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.!</p>
                </li>
                <li>
                    <BsCheckLg className='service__list-icon'/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.!</p>
                </li>
                <li>
                    <BsCheckLg className='service__list-icon'/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.!</p>
                </li>
            </ul>
        </article>
      </div>
    </section>
  )
}

export default services