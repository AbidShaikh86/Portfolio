import React, {useEffect, useRef} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function App() {
  
  const container = useRef(null)

  useGSAP(() => {

    // Hero Page Animation
    let tl = gsap.timeline()
    tl.from(".logo h2",{
      y: -30,
      opacity: 0,
      duration: 0.3,
      delay: 0.5
    }).from(".nav-item",{
      y: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3
    }).from("#menu",{
      x: 30,
      opacity: 0,
      duration: 0.3
    },"-=0.5").from(".main img",{
      x: 100,
      opacity: 0,
      duration: 0.5
    }).from(".main h2",{
      x: -100,
      opacity: 0,
      duration: 0.5
    }).from(".main span",{
      y: 30,
      opacity: 0,
      duration: 0.5
    },"-=0.5").from("#left-btn",{
      x: -150,
      opacity: 0,
      duration: 0.5
    }).from("#right-btn",{
      x: 150,
      opacity: 0,
      duration: 0.5
    },"-=0.5")


    // Project Page Animation
    let tl2 = gsap.timeline({
      scrollTrigger:{
        trigger: "#projects",
        start: "top 50%",
        end: "top 0"
      }
    })
    tl2.from("#projects h2",{
      y: -30,
      duration: 0.5,
      delay: 0.2,
      opacity: 0
    }).from("#project-1",{
      x: -350,
      opacity: 0,
      duration: 0.5
    }).from("#project-2",{
      x: 350,
      opacity: 0,
      duration: 0.5
    },"-=0.5")

    // Experience and Education section animation
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#experience",
        start: "top 50%",
        end: "top 0",
        scrub: 1
      }
    })
    tl3.from("#experience h2",{
      y: -300,
      opacity: 0,
      duration: 0.4
    }).from("#exp-1",{
      x: -300,
      opacity: 0,
      duration: 0.6
    }).from("#exp-2",{
      x: -300,
      opacity: 0,
      duration: 0.6
    }).from("#exp-3",{
      x: -300,
      opacity: 0,
      duration: 0.6
    })

    gsap.from("#contact",{
      scale: 0,
      opacity: 0,
      duration: 0.5,
      scrollTrigger:{
        trigger: "#contact",
      }
    })

    const handleWheelUp = () => {
      gsap.to(".navbar",{
        y: -100,
        duration: 1
      })
    }
    const handleWheelDown = () => {
      gsap.to(".navbar",{
        y: 0,
        duration: 0.3
      })
    }

    document.body.addEventListener("wheel",(e) => {   
      if(e.layerY > 200){
        handleWheelUp()
      }else{
        handleWheelDown()
      }
    })

  }, {scope: container});

  return (
    <div id='papa' ref={container}>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App