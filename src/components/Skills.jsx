import React, {useRef} from 'react'
import { skills } from './datasets/skills.json'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Skills = () => {

    const container = useRef(null)

    const handleMouseEnter = (e) => {
        gsap.to(e.currentTarget,{
            scale: 1.1,
            boxShadow: '0 0 5px 5px #fff',
            duration: 0.5,
            overwrite: true
        })
    }

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget,{
            boxShadow: '0 0 5px 5px transparent',
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
            overwrite: true
        })
    }

    useGSAP({scope: container})

    return (
        <section ref={container} className='skill-section'>
            <h2>What I do !!</h2>
            <div className="skills">
                {skills.map((each, index) => {
                    return (
                        <div className="img" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={index}>
                            <img src={each.image} alt={each.name} />
                            <h3>{each.name}</h3>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills