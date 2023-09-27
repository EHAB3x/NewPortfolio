import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/ExtraProjects.css';
import React from 'react'
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ExtraProjects = () => {
  return (
    <div className='extra_projects'>
        <h2>Other Noteworthy Projects</h2>
        <div className="content">
            <div className="project">
                <div className="top">
                    <FontAwesomeIcon icon={faFolder} className='folder'/>
                    <a href="https://github.com/EHAB3x/HTML-CSS-Template1.git" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
                </div>
                <h3>HTML CSS Template One</h3>
                <p>HTML CSS Template number one in elzero web school channel</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>

            <div className="project">
                <div className="top">
                    <FontAwesomeIcon icon={faFolder} className='folder'/>
                    <a href="https://github.com/EHAB3x/DB.git" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
                </div>
                <h3>HTML CSS Template Two</h3>
                <p>HTML CSS Template number two in elzero web school channel</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>

            <div className="project">
                <div className="top">
                    <FontAwesomeIcon icon={faFolder} className='folder'/>
                    <a href="https://github.com/EHAB3x/DB.git" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
                </div>
                <h3>HTML CSS Template Three</h3>
                <p>HTML CSS Template number three in elzero web school channel</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>

            <div className="project">
                <div className="top">
                    <FontAwesomeIcon icon={faFolder} className='folder'/>
                    <a href="https://github.com/EHAB3x/DB.git" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
                </div>
                <h3>Elite Corp</h3>
                <p>Responsive Template Using Bootstrap</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                </ul>
            </div>

            <div className="project">
                <div className="top">
                    <FontAwesomeIcon icon={faFolder} className='folder'/>
                    <a href="https://github.com/EHAB3x/DB.git" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
                </div>
                <h3>Flower Products API</h3>
                <p>API contains different flower products, Categories and users</p>
                <ul>
                    <li>JSON</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ExtraProjects