import React from 'react'
import './experience.css'
import {TiHtml5} from 'react-icons/ti'
import {SiCsswizardry, SiArduino} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {GrReactjs,GrRaspberry} from 'react-icons/gr'
import {DiPython} from 'react-icons/di'
import {TbLetterC} from 'react-icons/tb'
import {FaJava} from 'react-icons/fa'
import {AiOutlineConsoleSql, AiOutlineDatabase} from 'react-icons/ai'
import {ImEmbed} from 'react-icons/im'

const experience = () => {
  return (
    <section id='experience'>
      <h5>My Experience</h5>
      <h2>I have worked in</h2>
      <div className="container experience__container">
      <div className="programing">
        <h3>Programing</h3>
        <div className="experience__content">
        <article className='experience__details'>
            <DiPython className='experience__details-icons'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <AiOutlineDatabase className='experience__details-icons'/>
            <div>
            <h4>DBMS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <AiOutlineConsoleSql className='experience__details-icons'/>
            <div>
            <h4>SQL</h4>
            <small className='text-light'>Beginner</small>
            </div>
          </article>
          <article className='experience__details'>
            <TbLetterC className='experience__details-icons'/>
            <div>
            <h4>C language</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <FaJava className='experience__details-icons'/>
            <div>
            <h4>Java</h4>
            <small className='text-light'>Beginner</small>
            </div>
          </article>
        </div>
      </div>

      <div className="frontend">
        <h3>Web Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <TiHtml5 className='experience__details-icons'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <SiCsswizardry className='experience__details-icons'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <IoLogoJavascript className='experience__details-icons'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <GrReactjs className='experience__details-icons'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Beginner</small>
            </div>
          </article>
          <h3 className='appdev'>App Development</h3>
          <article className='experience__details'>
            <GrReactjs className='experience__details-icons'/>
            <div>
            <h4>React Native</h4>
            <small className='text-light'>Beginner</small>
            </div>
          </article>
          
        </div>
      </div>

      <div className="backend">
        <h3>Robotics</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <SiArduino className='experience__details-icons'/>
            <div>
            <h4>Arduino</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <GrRaspberry className='experience__details-icons'/>
            <div>
            <h4>Raspberry Pi</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <ImEmbed className='experience__details-icons'/>
            <div>
            <h4>Embedded C</h4>
            <small className='text-light'>Beginner</small>
            </div>
          </article>


        </div>
      </div>
      </div>

    </section>
  )
}

export default experience