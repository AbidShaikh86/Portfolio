import React from 'react'
import avatar from './img/avatar.png'

const Hero = () => {
    return (
        <section className='hero-page' id='home'>
            <div className="main">
                <img
                    src={avatar}
                    alt=""
                />
                <h2 className='left'>Hi, I am GULAMABID</h2>
                <span>
                    As a BCA graduate and full-stack developer, I specialize in building secure, end-to-end web applications using the MERN stack. Following my recent internship experience, I am excited to bring my technical skills and eagerness to learn to a new, dynamic team.
                </span>
                <div className="container">
                    <a href="#contact" className='hero-btn'><div className="btn btn-1" id='left-btn'>Get In Touch</div></a>
                    <a className='hero-btn' href="https://drive.google.com/file/d/1BLtfAy4-_mO9zy7FC0a8cKPm03WFelXN/view?usp=drive_link"><div className="btn btn-2" id='right-btn'>Dowload CV</div></a>
                </div>
            </div>
        </section>
    )
}

export default Hero