import React from 'react'
import './portfolio.css'
import port from '../../assets/portfolio.jpg'
import img1 from '../../assets/Ai.webp'
import img2 from '../../assets/web.png'
import img3 from '../../assets/coviddata.jpeg'
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
      id : 1,
      image: img3,
      title: "Covid Data Analysis",
      github: "https://github.com/SGeswar/Covid-Data-Analysis.git",
      demo: "https://public.tableau.com/app/profile/s.gnaneswar/viz/CovidDataAnalysis_16667298357070/Dashboard1?publish=yes"
  },

  {
    id : 2,
    image: img1,
    title: "Python Voice Assistant",
    github: "https://github.com/SGeswar/Voice-Assistant.git",
    demo: "#"
  },


  {
    id : 3,
    image: img2,
    title: "Portfolio Website",
    github: "https://github.com/SGeswar/profile.git",
    demo: "#"
  },

  {
    id : 4,
    image: port,
    title: "Portfolio projects",
    github: "#",
    demo: "#"
  },

  {
    id : 5,
    image: port,
    title: "Portfolio projects",
    github: "#",
    demo: "#"
  },

  {
    id : 6,
    image: port,
    title: "Portfolio projects",
    github: "#",
    demo: "#"
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Swiper className="container portfolio__container"
          modules={[Pagination]}
          breakpoints={{
            600: {
              slidesPerView:1,
              spaceBetween:10,
            },

            480: {
              slidesPerView:2,
              spaceBetween:10,
            },

            768: {
              slidesPerView:2,
              spaceBetween:20,
            },

            1024: {
              slidesPerView:3,
              spaceBetween:50,
            },

            1280: {
              slidesPerView:3,
              spaceBetween:50,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          >
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <SwiperSlide key={id} className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Portfolio