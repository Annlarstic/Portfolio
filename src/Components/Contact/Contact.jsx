
import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import './Contact.css'

export default function Contact() {
  return (
    <section id='contact'>
    <h2>Contact Me</h2>

    <div className='container contact_container'>
    <div className='contact_options'>

    <article className='contact_option'>
    <MdOutlineEmail className='contact_option_icon' />
    <h4>Email</h4>
    <h5>nonsochi1823@gmail.com</h5>
    <a href='mailto:nonsochi1823@gmail.com' target='_blank' rel='noopener noreferrer'>Contact</a>
    </article>

    <article className='contact_option'>
    <BsGithub className='contact_option_icon' />
    <h4>GitHub</h4>
    <h5>Annlarstic</h5>
    <a href='https://github.com/Annlarstic' target='_blank' rel='noopener noreferrer'>Open</a>
    </article>

    </div>

    <form>
    <input type="text" name="name" placeholder="Name" required />
    <input type="email" name="email" placeholder="Email" required />
    <textarea name="message" rows="7" placeholder="Message"></textarea>
    <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
    </div>
    </section>
  )
}