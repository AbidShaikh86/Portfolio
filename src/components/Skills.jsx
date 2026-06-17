import React, { useRef } from 'react'
import { skills } from './datasets/skills.json'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Skills = () => {

    const container = useRef(null)
    const { contextSafe } = useGSAP({ scope: container })

    const handleMouseEnter = contextSafe((e) => {
        gsap.to(e.currentTarget, {
            scale: 1.1,
            boxShadow: '0 0 5px 5px #fff',
            duration: 0.5,
            overwrite: true
        })
    })

    const handleMouseLeave = contextSafe((e) => {
        gsap.to(e.currentTarget, {
            boxShadow: 'none',
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
            overwrite: true
        })
    })

    

    return (
        <section ref={container} className='skill-section' id='skills'>
            <h2>What I do !!</h2>
            <div className="skills">
                {skills.map((each, index) => {
                    return (
                        <div className='skill-card' key={index}>
                        <div className="img" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img src={each.image} alt={each.name} />
                            <h3>{each.name}</h3>
                        </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills