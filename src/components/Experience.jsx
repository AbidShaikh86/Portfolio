import React from 'react'

const Experience = () => {
  return (
    <section id='experience' className='experience-section'>
        <h2>Experience</h2>
        <div className="exp-box" id='exp-1'>
            <div className='exp-logo'>
              <img src="https://www.diwizon.com/assets/imgs/logo/logo.png" alt="" />
            </div>
            <h3>Diwizon Dynamics Pvt Ltd</h3>
            <div className="role"><h4><span>Role: </span><span>Intern</span></h4><span>Nov 2025 - Dec 2025</span></div>
              <ul>
                <li>Got a chance to work on a real project for the first time and understood how development works outside of college assignments</li>
                <li>Worked alongside senior developers, learned how to read existing code, and started understanding how teams coordinate on a project.</li>
                <li>Helped with small tasks in the frontend using React and JavaScript, and learned how to ask the right questions when stuck.</li>
              </ul>
        </div>
        <h2>Education</h2>
        <div className="exp-box" id='exp-2'>
            <div className='exp-logo'>
              <img src="https://cppfhscc.org/wp-content/uploads/2023/08/cppfhscc-favicon.png" height={70} alt="" />
            </div>
            <h3>C P PATEL & F H SHAH COMMERCE COLLEGE</h3>
            <div className="role"><h4><span>Cource: </span><span>Bachelor of Computer Application</span></h4><span>June 2023 - May 2026</span></div>
        </div>
        <div className="exp-box" id='exp-3'>
            <h3>Fatima highschool</h3>
            <div className="role"><h4><span>Class: </span><span>12th</span></h4><span>June 2022 - May 2023</span></div>
        </div>
    </section>
  )
}

export default Experience