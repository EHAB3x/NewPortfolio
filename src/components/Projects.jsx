import "./css/Projects.css"
import React from 'react'
import wa3d from "../Images/wa3d.png";
import pray from "../Images/pray.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons"

const Projects = () => {
  return (
    <div id="Projects" className="projects px-6">
        <h2><span>03.</span> Some Things I've Built</h2>

        <div className="content">
            <div className="project left">
                    <img src={wa3d} alt="wa3d" />
                    <div className="overlay">
                        <span>Featured Project</span>
                        <h3>Wa3d Flourist</h3>
                        <p>A flower shop <span>e-commerce</span> to sell flowers and add to cart. Using custom <span>API</span> to handle <span>products and categories</span></p>
                        <ul className="skills">
                            <li>ReactJS</li>
                            <li>Fontawesome</li>
                            <li>Bootstrap</li>
                        </ul>
                        <ul className="social">
                            <li><a href="https://github.com/EHAB3x/wa3d-flourist.git" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a></li>
                            <li><a href="https://wa3d-flourist.netlify.app" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faShareFromSquare}/></a></li>
                        </ul>
                    </div>
            </div>

            <div className="project right">
                    <img src={pray} alt="wa3d" />
                    <div className="overlay">
                        <span>Featured Project</span>
                        <h3>Pray</h3>
                        <p>Pray is an app to <span>schedule</span> your pray time, give u <span>random ayah</span> every login, u can use seb7a and quran tabs</p>
                        <ul className="skills">
                            <li>NextUI</li>
                            <li>axios</li>
                            <li>ReactJS</li>
                            <li>Adhan API</li>
                        </ul>
                        <ul className="social">
                            <li><a href="https://github.com/EHAB3x/pray.git" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a></li>
                            <li><a href="https://salatktime.netlify.app/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faShareFromSquare}/></a></li>
                        </ul>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Projects