import React, {useEffect} from 'react'
import './Contact.css'
import {NavLink} from 'react-router-dom'
import {gsap} from 'gsap'

const Contact = () => {

  const timeline = gsap.timeline();

  useEffect(() => {
      const email = document.querySelector('.contactEmail')
      const animationContact = document.querySelectorAll('.gsapAnimation')
      timeline.from(email, {opacity: 0, y: 100, duration: 1.5, stagger: 0.3})
      timeline.from(animationContact,  {opacity: 0, z: 50, duration: 1, stagger: 0.3})
  },[])

  return (
    <div className='contactContainer'>
        <div className='contact'>
            <div className='contactEmail'>
                simplestudio@gmail.com
            </div>
        </div>
        <div className='gsapAnimation backButtonContact'>
              <NavLink className={'backButtonContactText'} to='/'>← Back</NavLink>
         </div>
         <div className='gsapAnimation contactInstagram'>
            <a href="https://www.instagram.com/simplestudio.ba"target="_blank" rel="noopener noreferrer">Instagram <span className='simboloContact'>( ͡° ͜ʖ ͡°)</span></a>
         </div>
    </div>
  )
}

export default Contact