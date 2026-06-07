import React, {useRef} from 'react'
import thumb1 from "./img/thumb-1.png"
import thumb2 from "./img/thumb-2.png"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Projects = () => {

    const container = useRef(null)

    useGSAP({scope: container})

    const handleMouseEnterCard = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1.1,
            duration: 0.2,
            ease: "power1.in",
            overwrite: true
        })
    }

    const handleMouseEnterButton = (e) => {
        gsap.to(e.currentTarget, {
            backgroundColor: "#fff",
            color: "black",
            duration: 0.2,
            ease: "power1.in"
        })
    }

    const handleMouseLeaveCard = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            duration: 0.2,
            ease: "power1.out",
            overwrite: true
        })
    }

    const handleMouseLeaveButton = (e) => {
        gsap.to(e.currentTarget, {
            backgroundColor: "transparent",
            color: "#fff",
            duration: 0.2,
            ease: "power1.out"
        })
    }

    return (
        <section className='project-section' id='projects' ref={container}>
            <h2>Projects</h2>
            <div className="projects">
                <div className="project" id='project-1' onMouseEnter={handleMouseEnterCard} onMouseLeave={handleMouseLeaveCard}>
                    <img
                        src={thumb1}
                        alt=""
                    />
                    <h3>Visiter Pass Management System</h3>
                    <a href="https://github.com/AbidShaikh86/-Visiter-Pass-Management-System"><button onMouseEnter={handleMouseEnterButton} onMouseLeave={handleMouseLeaveButton}>Source Code</button></a>
                </div>
                <div className="project" id='project-2' onMouseEnter={handleMouseEnterCard} onMouseLeave={handleMouseLeaveCard}>
                    <img
                        src={thumb2}
                        alt=""
                    />
                    <h3>Task Master</h3>
                    <a href="https://github.com/AbidShaikh86/MERN-Projects/tree/main/Project-8"><button onMouseEnter={handleMouseEnterButton} onMouseLeave={handleMouseLeaveButton}>Source Code</button></a>
                </div>
            </div>
        </section>
    )
}

export default Projects