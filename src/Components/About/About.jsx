
import React from 'react'
import me2 from '/Images/me2.jpeg'
import { GiGraduateCap } from 'react-icons/gi';
import { BsTelephoneForward } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
import './About.css'

const About = () => {

return (
<section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about_container'>
    <div className='about_me'>
    <div className='about_me_image'>
    <img src={me2} alt="" />
    </div>
    </div>

    <div className='about_content'>
    <div className='about_cards'>
    
    <article className='about_card'>
    <GiGraduateCap className='about_icon' />
    <h5>Degree</h5>
    <small> OND. Mass Communication <br />
    <i>Port-Harcourt Polytechnic</i>
    </small><br /> <br/>

    <small> HND. Mass Communication <br />
    <i>Federal Polytechnic Oko</i>
    </small><br /> <br />

     <small>Front-End Development<br />
    <i>ALX</i>
    </small>
    </article>

           
    <article className='about_card'>
    <TfiWorld className='about_icon' />
    <h5>Location</h5>
    <small>
    <strong>Current: OKO, Orumba, <br />  Anambra</strong> <br />
    <strong>Federal Polytechnic Oko: Oko,  <br />  Anambra State</strong> <br />
    <strong>Port Harcourt Polytechnic: Rumuola,  <br />  Port Harcourt</strong> 
    </small>
    </article>

          
    <article className='about_card'>
    <BsTelephoneForward className='about_icon' />
    <h5>Contact</h5>
    <small> nonsochi1823@gmail.com<br />
    +234 704 875 6430
    </small>
    </article>

    </div> <br />

    <p>Hi, I’m Ann Chinonso, a frontend developer with a passion for creating sleek, user friendly websites. <br />Skilled in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap and React, I bring designs to life  with  <br />seamless user experiences and responsive interfaces.</p>

    </div>

    </div>
    </section>
  )
}

export default About