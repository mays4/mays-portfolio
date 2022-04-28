import { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEnvelope,
  faComputer,
  faSun,
  faMoon,

} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import LogoS from '../../assets/images/logo-m-m.png';
import LogoSubtitle from '../../assets/images/mays.png';
import { ThemeContext } from '../../context/ThemeContext';

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleButton = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <nav className="navigation">
        <div>
          <Link className="logo" to="/">
            <img className="navbar-img" src={LogoS} alt="logo" />
          </Link>
        </div>
        <div className="moon-sun">
          <button className="btn" onClick={toggleButton}></button>
          {theme === 'light' ? (
            <FontAwesomeIcon className="moon" icon={faMoon} color="#4d4d4e" />
          ) : (
            <FontAwesomeIcon className="sun" icon={faSun} color="#4d4d4e" />
          )}
        </div>
        <div>
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
          }
        >
          <ul className='nav-ul'>
          
            <li className='nav-link'>
              <NavLink onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
                exact="true"
                activeclassname="active"
                to="/about"
                className="link"
              >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
              </NavLink>
             
            </li>

            <li className='nav-link'>
              <NavLink  onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
                exact="true"
                activeclassname="active"
                to="/contact"
                className="link"
              >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
              </NavLink>
             
            </li>
            <li className='nav-link'>
              <NavLink 
               onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
                exact="true"
                activeclassname="active"
                to="/project"
                className="link"
              >
                <FontAwesomeIcon icon={faComputer} color="#4d4d4e"  />
              </NavLink>
            </li>
          
          </ul>
        </div>

      

       
      </nav>
    </>
  );
};

export default NavBar;
