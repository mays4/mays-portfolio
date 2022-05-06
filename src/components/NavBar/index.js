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
import './index.scss';
import LogoS from '../../assets/images/m-6.png';
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
          <Link className="logo-navbar" to="/">
            <img className="navbar-img" src={LogoS} alt="logo" />
          </Link>
        </div>
        <div className="moon-sun">
  
          {theme === 'light' ? (
            <FontAwesomeIcon  onClick={toggleButton}  className="moon" icon={faMoon} color="#4d4d4e" />
          ):(
          
            <FontAwesomeIcon onClick={toggleButton} className="sun" icon={faSun} color="#4d4d4e" />
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
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
            <NavLink exact='true' activeclassname='active' to='/'
            NavLink onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
            >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
           </NavLink>

            </li>
        
            <li className='nav-link'>
              <NavLink onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
                exact="true"
                activeclassname="active"
                to="/about"
                className="link about-link"
              >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
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
                className="link project-link"
              >
                <FontAwesomeIcon icon={faComputer} color="#4d4d4e"  />
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink  onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
                exact="true"
                activeclassname="active"
                to="/contact"
                className="link contact-link"
              >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
              </NavLink>
             
            </li>
          
          </ul>
        </div>

      

       
      </nav>
    </>
  );
};

export default NavBar;
