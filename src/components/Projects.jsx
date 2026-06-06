import React from 'react'
import thumb1 from "./img/thumb-1.png"
import thumb2 from "./img/thumb-2.png"

const Projects = () => {
    return (
        <section className='project-section' id='projects'>
            <h2>Projects</h2>
            <div className="projects">
                <div className="project" id='project-1'>
                    <img
                        src={thumb1}
                        alt=""
                    />
                    <h3>Visiter Pass Management System</h3>
                    <a href="https://github.com/AbidShaikh86/-Visiter-Pass-Management-System"><button>Source Code</button></a>
                </div>
                <div className="project" id='project-2'>
                    <img
                        src={thumb2}
                        alt=""
                    />
                    <h3>Task Master</h3>
                    <a href="https://github.com/AbidShaikh86/MERN-Projects/tree/main/Project-8"><button>Source Code</button></a>
                </div>
            </div>
        </section>
    )
}

export default Projects