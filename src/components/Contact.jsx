import React from 'react'

const Contact = () => {
  return (
    <footer id='contact' className='Footer'>
        <h2>Contact</h2>
        <ul>
            <li>I am a MERN Stack Developer and recent BCA graduate passionate about building clean, efficient full-stack web applications.</li>
            <li>Following my recent internship, I am eager to bring my practical experience with React and Node.js to a collaborative team.</li>
            <li>I am always looking for new opportunities to work hard, tackle challenges, and grow my skills every single day.</li>
        </ul>
        <div className='mail'>
            <a href="mailto:gulamabidshaikh@gmail.com"><img src='https://i.ibb.co/N8WVCSh/mail.png' height={30} alt="" /> gulamabidshaikh@gmail.com</a>
        </div>
        <div className="icons">
            <a href="https://github.com/AbidShaikh86">
                <img src='https://i.ibb.co/N2pyP7yn/github.png' height={50} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/gulamabid-shaikh/">
                <img src='https://i.ibb.co/LdFb39qV/linkedin.png' height={50} alt="" />
            </a>
        </div>
    </footer>
  )
}

export default Contact