import React from 'react'
import './index.scss'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <>
       <div className='footer'><ul>
       <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mays-alraheem">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className='linkedin'/>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/mays4">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className='github'/>
          </a>
        </li>
       </ul>
       
       </div>
    </>
 
  )
}

export default Footer