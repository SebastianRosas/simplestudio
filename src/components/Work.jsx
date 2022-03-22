import React, {useEffect} from 'react'
import './Work.css'
import {NavLink} from 'react-router-dom'
import {gsap} from 'gsap'


const Work = () => {

  const timeline = gsap.timeline();

  useEffect(() => {
    const workText = document.querySelector('.workText')
    const backbutton = document.querySelector('.backContainer')
    timeline.from(workText, {opacity: 0, z: 50, duration: 2, stagger: 0.1})
    timeline.from(backbutton, {opacity: 0, x: 50, duration: 1, stagger: 0.1})
  },[])


  return (
    <div className='workContainer'>

        <div className='backContainer'>
            <NavLink className={'backText'} to='/'>← Back</NavLink>
        </div>
      <div className='workText'>
        We are working here  <br />
        ☃ ☃ ☃ 
        <br />
        While keep relax and drink a wine 🍷
      </div>

    </div>
  )
}

export default Work