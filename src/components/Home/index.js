import { useEffect, useState, useContext } from 'react';
import './index.scss';
import title from '../../assets/images/m-6.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Profile from './Profile';
import Loader from 'react-loaders';
import { ThemeContext } from '../../context/ThemeContext';

import 'animate.css';
import Contact from '../Contact';
import About from '../About';
import Projects from '../Projects';



const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const { theme } = useContext(ThemeContext);
  const nameArray = ['a', 'y', 's'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);
  

  return (
    <>
        {/* <Navbar /> */}
      <div className={theme} id="container">
        
       
          <div className="home">
            <div className="home-page">
              <div className="text-zone">
                <h1 className="words">
                  <span className={letterClass}>H</span>
                  <span className={`${letterClass} _12`}>i,</span>
                  <br />
                  <span className={`${letterClass} _13`}>I</span>
                  <span className={`${letterClass} _14`}>'m</span>
                  <img
                    className="logo-img"
                    src={title}
                    alt="JavaScript Developer Name, Web Developer Name"
                  />

                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                  />
                  <br />
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={21}
                  />
                </h1>
                
                <h2>Full stack Developer</h2>
                <br></br>
                <Link to="/project" className="flat-button">
                  Projects
                </Link>
              </div>
            </div>
            <div className="proto">
              <Profile />
            </div>
          </div>
        
        <div id="about"> 
            <About />
            
          </div>
        <div id="work" >
        <Projects />
          </div>
           
        <div id="contact" >
            <Contact />
          </div>
        
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  );
};

export default Home;
