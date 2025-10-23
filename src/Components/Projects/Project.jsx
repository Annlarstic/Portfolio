import React from 'react'
// import me6 from '/Images/me6.jpeg';
import me04 from '/Images/me04.jpg'
import me3 from '/Images/me3.jpeg';
import me5 from '/Images/me5.jpeg';
import './Project.css'


export default function Project() {
  return (
    <section id='projects'>
    <h2>My Projects</h2>

    <div className='container project_container'>

    <article className='project_item'>
    <div className='project_item_image1'>
    <img src={me04} alt="" />
    <h3>MovieBox</h3>
    <small className='text-light'>React</small>
    
    

    <div className='project_item_btn'>
     <a href='https://box-movie-abqk3hvdf-ann-nonsos-projects.vercel.app' className='btn'>Vercel</a>
   
    </div>
    </div>
   </article>


    <article className='project_item'>
    <div className='project_item_image'>
    <img src={me3} alt="" />
    <h3>Wheather</h3>
    <small className='text-light'>React</small>
    <div className='project_item_btn'>
   <a href='https://weather-forecast-ten-kohl.vercel.app/' className='btn'>Vercel</a>
   

    </div>
    </div>
    </article>


   <article className='project_item'>
    <div className='project_item_image'>
    <img src={me5} alt="" />
    <h3>Calculator</h3>
    <small className='text-light'>React</small>
    <div className='project_item_btn'>
    <a href='https://annlarstic.github.io/Calculator/' className='btn'>GitHub</a>

    </div>
    </div>
    </article>
  
    </div>

    
    </section>
  )
}
