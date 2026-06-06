import React ,{useState} from 'react'
import logo from "./img/Logo.png"
import menu from './img/menu.svg'
import close from './img/close.svg'

const Navbar = () => {
  let [side, setSide] = useState('none')
  const openSidebar = () => {
    setSide('flex')
  }
  const closeSidebar = () => {
    setSide('none')
  }

  return (
    <nav className='navbar'>
        <div className="logo">
            <h2>PORTFOLIO</h2>
        </div>
        <ul className='nav'>
            <li className='nav-item'><a href="#home">Home</a></li>
            <li className='nav-item'><a href="#projects">Projects</a></li>
            <li className='nav-item'><a href="#experience">Experience</a></li>
            <li className='nav-item'><a href="#contact">Contact</a></li>
            <li id='menu' onClick={openSidebar}><img src={menu} alt="" /></li>
        </ul>
        <ul className='sidebar' style={{display: side}}>
          <li id='close' onClick={closeSidebar}><img src={close} alt="" /></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar