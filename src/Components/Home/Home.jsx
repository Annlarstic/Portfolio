import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsMedium } from 'react-icons/bs'
import me from '/Images/me.jpeg'
import './Home.css'

const Home = () => {
  return (
    <header id='home'>
   <div className='container home_container'>
   <h5>Hello, I'm </h5>
   <h1>Ann Chinonso Ezeakunne</h1>
   <h5 className='text-light'>I am an Frontend Developer</h5>

   <div className='cta'>
    <a href='https://docs.google.com/document/d/1vhIUrlUsdG5fBGMWBGXXzLGIPLVTG82Ol4dHjMwmbnc/edit?usp=sharing' download className='btn'>
    Download CV
    </a>

   <a href='#contact' className='btn btn-primary'>
   Contact Me
    </a>
   </div>

    <div className='home_social'>
     <a href='https://www.linkedin.com/in/ann-ezeakunne/'>
    <BsLinkedin />
    </a>

    <a href='https://github.com/Annlarstic'>
    <BsGithub />
    </a>

    <a href=''>
    <BsMedium />
    </a>
    </div>

    <div className='me'>
    <img src={me} alt="Ann"/>
    </div>

    <a href='/contact' className='scroll_down'>
    Scroll Down
    </a>

   </div>
      
    </header>
  )
}

export default Home
