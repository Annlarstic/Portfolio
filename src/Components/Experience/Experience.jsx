
import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiReact } from 'react-icons/si'
import './Experience.css'

export default function Experience() {
  return (
    <section id='experience'>
    <h2>My Skills</h2>
    <div className='container experience_container'>
    <div className='experience_frontend'>
    <h3>FrontEnd Development</h3>
    <div className='experience_content'>
    <article className='experience_detail'>
    <SiHtml5 className='experience_icon' />
    <div>
    <h4>HTML</h4>
    <small className='text-light'>Experience</small>
    </div>
    </article>

    <article className='experience_detail'>
    <SiCss3 className='experience_icon' />
    <div>
    <h4>CSS</h4>
    <small className='text-light'>Advanced</small>
    </div>
    </article>

    <article className='experience_detail'>
    <SiJavascript className='experience_icon' />
    <div>
    <h4>JavaScript</h4>
    <small className='text-light'>Advanced</small>
    </div>
    </article>

    <article className='experience_detail'>
    <SiBootstrap className='experience_icon' />
    <div>
    <h4>Bootstrap</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>

    <article className='experience_detail'>
    <SiTailwindcss className='experience_icon' />
    <div>
    <h4>Tailwind CSS</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>

    <article className='experience_detail'>
    <SiReact className='experience_icon' />
    <div>
    <h4>React</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>
    </div>
    </div>
    </div>
    </section>
  )
}
