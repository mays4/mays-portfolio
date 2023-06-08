import React  from 'react';
import './index.scss'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    
       <div className='footer'><div>
       <span >
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mays-alraheem">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"  className='linkedin'/>
          </a>
        </span>
        <span>
          <a target="_blank" rel="noreferrer" href="https://github.com/mays4">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className='github'/>
          </a>
        </span>
       </div>
       
       </div>

 
  )
}

export default Footer