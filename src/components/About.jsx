import React, {useEffect} from 'react'
import './About.css'
import Flag from '../img/flag.png'
import {NavLink} from 'react-router-dom'
import { gsap } from 'gsap'

const About = () => {

const timeline = gsap.timeline();

useEffect(() => {
    const backButton = document.querySelector('.backButtonAbout')
    const text = document.querySelector('.aboutTextContainer') 
    const title = document.querySelector('.aboutTitle')
    timeline.from(title, {opacity: 0, x: 100, duration: 1.3, stagger: 0.2} )
    timeline.from(text, {opacity: 0, z: 100, duration: 1.3, stagger: 0.2} )
    timeline.from(backButton, {opacity: 0, y: 100, duration: 1, stagger: 0.2} )
},[])

  return (
    <div className='aboutContainer'>
        <div className='aboutLeftContainer'>
              <div className='backButtonAbout'>
              <NavLink className={'backButtonAboutText'} to='/'>← Back</NavLink>
              </div>
          <img src={Flag} />
        </div>
        <div className='aboutRightContainer'>
          <div className='aboutTitle'>
            About Simple
          </div>
          <div className='aboutTextContainer'>
          <span className='simbolsAbout'>→</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum. <span className='simbolsAbout'>☺ ☺ ☺</span> 
        <br />
        <br />
        <span className='simbolsAbout'>→</span> Eleifend donec pretium vulputate sapien nec sagittis aliquam
        malesuada.Malesuada fames ac turpis egestas integer eget aliquet.
        Sit amet venenatis urna cursus. Lpsum <span className='simbolsAbout'>⋯ ⋯ ⋯ ▶</span>
        dictumst quisque sagittis purus, sit amet volutpat consequat.
        Vulputate ut pharetra sit amet aliquam id diam maecenas. 
        Purus in massa tempor nec feugiat. Nullam vehicula ipsum a
        arcu cursus. Morbi tristique senectus et netus.
        Vulputate sapien nec sagittis aliquam. <span className='simbolsAbout'>✿ ❤ ★</span>
          </div>
        </div>
    </div>
  )
}

export default About