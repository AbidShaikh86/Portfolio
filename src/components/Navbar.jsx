import React, { useState, useRef } from 'react'
import menu from './img/menu.svg'
import close from './img/close.svg'
import { Link } from 'react-scroll'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
  let [side, setSide] = useState('none')
  const container = useRef(null)

  let tl = gsap.timeline()

  const openSidebar = () => {
    
    tl.to('.sidebar',{
      x: 0,
      duration: 0.3,
      opacity: 1
    })
    tl.to('.sidebar li',{
      x: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.2
    })
    // setSide('flex')
  }
  const closeSidebar = () => {
    // let tl = gsap.timeline()
    tl.to('.sidebar li',{
      x: '100%',
      opacity: 0,
      duration: 0.1,
      stagger: -0.1
    })
    tl.to('.sidebar',{
      x: '100%',
      duration: 0.1,
      opacity: 0
    })
    
    // setSide('none')
  }

  useGSAP({ scope: container })
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      backgroundColor: "#ffffff17",
      y: -5,
      duration: 0.2,
      ease: "power4.in",
      overwrite: true
    })
  }
  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      backgroundColor: "transparent",
      y: 0,
      duration: 0.5,
      ease: "power4.out",
      overwrite: true
    })
  }
// style={{ display: side }}
  return (
    <>
      <nav className='navbar' ref={container}>
        <div className="logo">
          <h2>PORTFOLIO</h2>
        </div>
        <ul className='nav'>
          <li className='nav-item'><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }} spy={true}>Home</Link></li>
          <li className='nav-item'><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="skills" smooth={true} duration={500} style={{ cursor: 'pointer' }} spy={true}>Skills</Link></li>
          <li className='nav-item'><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="projects" smooth={true} duration={500} style={{ cursor: 'pointer' }} spy={true}>Projects</Link></li>
          <li className='nav-item'><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="experience" smooth={true} duration={500} style={{ cursor: 'pointer' }} spy={true}>Experience</Link></li>
          <li className='nav-item'><Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="contact" smooth={true} duration={500} style={{ cursor: 'pointer' }} spy={true}>Contact</Link></li>
          <li id='menu' onClick={openSidebar}><img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={menu} height={40} alt="" /></li>
        </ul>
      </nav>
      <ul className='sidebar' >
          <li id='close' onClick={closeSidebar}><img src={close} alt="" /></li>
          <li><Link onClick={closeSidebar} to="home" smooth={true} duration={500} style={{ cursor: 'pointer', zIndex: 999 }} spy={true}>Home</Link></li>
          <li><Link onClick={closeSidebar} to="skills" smooth={true} duration={500} style={{ cursor: 'pointer', zIndex: 999 }} spy={true}>Skills</Link></li>
          <li><Link onClick={closeSidebar} to="projects" smooth={true} duration={500} style={{ cursor: 'pointer', zIndex: 999 }} spy={true}>Projects</Link></li>
          <li><Link onClick={closeSidebar} to="experience" smooth={true} duration={500} style={{ cursor: 'pointer' }} spy={true}>Experience</Link></li>
          <li><Link onClick={closeSidebar} to="contact" smooth={true} duration={500} style={{ cursor: 'pointer', zIndex: 999 }} spy={true}>Contact</Link></li>
        </ul>
    </>
  )
}

export default Navbar