import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/Social.css'
import React from 'react'
import { faGithub, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Social = () => {
  return (
    <div className='social'>
        <ul className='media'>
            <li><a href="https://github.com/EHAB3x" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a></li>
            <li><a href="https://instagram.com/ihab_mahmoud_3?igshid=NzZlODBkYWE4Ng==" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
            <li><a href="https://x.com/Hoobz_3x?t=OJvOhSIwcFtskjI2CTDotA&s=09" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/></a></li>
            <li><a href="https://www.linkedin.com/in/ehab-mahmoud-761341292" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></li>            
            <li><a href=" https://wa.me/01028593019" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp}/></a></li>            
            <li  className='last_list'><span></span></li>
        </ul>

        <div className="mail">
            <div>
                <a href="mailto:ehabmah6969@gmail.com">ehabmah6969@gmail.com</a>
            </div>
        </div>
    </div>
  )
}

export default Social