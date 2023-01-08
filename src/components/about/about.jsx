import React from 'react'
import '../../components/about/about.css'
import imgme from '../../assets/myimg.png'
import {FaUserGraduate} from 'react-icons/fa'
import {SiPython} from 'react-icons/si'
import {TbDeviceAnalytics} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
                    <div className="about__me-img">
                      <img src={imgme} alt='myimage2'/>
                    </div>
        </div>
        
        <div className="about__content" >
                    <div className="about__cards">
                      <article className='about__card'>
                        <FaUserGraduate className='about__icon'/>
                        <h5>Education</h5>
                        <small>Bachelor of Engineering(B.E.)</small>
                      </article>
                        
                      <article className='about__card'>
                        <SiPython className='about__icon'/>
                        <h5>Programming</h5>
                        <small>Python and DSA</small>
                      </article>
              
                      <article className='about__card'>
                        <TbDeviceAnalytics className='about__icon'/>
                        <h5>Recent Project</h5>
                        <small>Covid Data Analysis</small>
                      </article>
                    </div>
                      
                    <p>
                      An enthusiastic person with high optimum and leadership skills pursued Bachelor of Engineering - B.E in Electronics and Electronics and Communications Engineering - ECE. Eager to learn and implement new technologies and methodologies. Always willing to solve problems in an innovative way.
                    </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About