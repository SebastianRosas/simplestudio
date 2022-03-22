import React, {useEffect} from 'react'
import {gsap} from 'gsap'
import ChairContainer from './ChairContainer'
import './Home.css'
import {NavLink} from 'react-router-dom'

const Home = () => {


 const timeline = gsap.timeline();

 useEffect(() => {
    const homeButtons = document.querySelectorAll('.bottomButtomContainer')
    const title = document.querySelector('.title')

    timeline.from(homeButtons, {opacity: 0, x: 50, duration: 1, stagger: 0.3})
    timeline.from(title, {opacity: 0, z: 50, duration: 1, stagger: 0.1})
 },[])

  return (
    <div className='homeContainer'>
        <div className='leftSide'>
            <div className='leftTopSide'>
                 <div className='topFirstContainer'>
                      <div className='title'>
                         Simple Studio
                      </div>
                 </div>
                 <div className='topSecondContainer'>
                 
                 </div>
             </div>
            <div className='leftBottomSide'>
                 <div className='bottomFirstContainer'>
                    <div className='bottomButtomContainer'>
                    <NavLink className={'bottomButtomText'} to='/about'><span className='arrowButtoms'>→</span> About</NavLink>
                    </div>
                 </div>
                <div className='bottomSecondContainer'>
                    <div className='bottomButtomContainer'>
                    <NavLink className={'bottomButtomText'} to='/contact'><span className='arrowButtoms'>→</span> Contact</NavLink>
                    </div>
                </div>
            <div className='bottomThirdContainer'>
                    <div className='bottomButtomContainer'>
                    <NavLink className={'bottomButtomText'} to='/work'><span className='arrowButtoms'>→</span> Wərk</NavLink>
                    </div>
                </div>
            </div>
         </div>
      <div className='rightSide'>
                    <ChairContainer />
      </div>
    </div>
  )
}

export default Home