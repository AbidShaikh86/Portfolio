import React, {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {

    const container = useRef(null)

    useGSAP({scope: container})

    const handleMouseEnter = (e) => {
        gsap.to(e.currentTarget, {
            backgroundColor: "#fff",
            color: "black",
            duration: 0.2,
            ease: "power1.in"
        })
    }

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            backgroundColor: "transparent",
            color: "#fff",
            duration: 0.2,
            ease: "power1.out"
        })
    }

    const handleMouseEnterReverse = (e) => {
        gsap.to(e.currentTarget, {
            backgroundColor: "transparent",
            color: "#fff",
            duration: 0.2,
            ease: "power1.in"
        })
    }

    const handleMouseLeaveReverse = (e) => {
        gsap.to(e.currentTarget, {
            backgroundColor: "#fff",
            color: "black",
            duration: 0.2,
            ease: "power1.out"
        })
    }
    

    return (
        <section ref={container} className='hero-page' id='home'>
            <div className="main">
                <img
                    src='https://i.ibb.co/V07TFD9x/Avatar.jpg'
                    alt=""
                />
                <h2 className='left'>Hi, I am GULAMABID</h2>
                <span>
                    As a BCA graduate and full-stack developer, I specialize in building secure, end-to-end web applications using the MERN stack. Following my recent internship experience, I am excited to bring my technical skills and eagerness to learn to a new, dynamic team.
                </span>
                <div className="container">
                    <a href="#contact" className='hero-btn'><div onMouseEnter={handleMouseEnterReverse} onMouseLeave={handleMouseLeaveReverse} className="btn btn-1" id='left-btn'>Get In Touch</div></a>
                    <a className='hero-btn' href="https://drive.google.com/file/d/1BLtfAy4-_mO9zy7FC0a8cKPm03WFelXN/view?usp=drive_link"><div className="btn btn-2" id='right-btn' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Dowload CV</div></a>
                </div>
            </div>
        </section>
    )
}

export default Hero