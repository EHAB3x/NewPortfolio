import './css/About.css'
import React from 'react'
import me from '../Images/msg2019052475-4885.jpg'
const About = () => {
  return (
    <div className='about px-6' id='About'>
        <h2><span>01.</span> About Me</h2>
        <div className="content">
            <div className="left">
                <p>Hello! My name is <span>Ehab</span> and i am computer science student at mansoura university. I enjoy creating things that live on the <span>internet</span>. My interest in web development started in 2022.</p>
                <p>My journey as a <span>front-end developer</span> began with a strong curiosity for the intersection of design and technology. I am fascinated by the way a well-designed <span>user interface</span> can enhance the overall user experience and leave a lasting impression. I strive to bridge the gap between creativity and technical expertise to deliver impactful digital solutions.</p>
            </div>

            <div className="right">
                <img src={me} alt="ehab mahmoud" />
            </div>
        </div>
    </div>
  )
}

export default About