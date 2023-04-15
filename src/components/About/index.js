import { useEffect, useState, useContext } from 'react';
import AnimatedLetters from '../AnimatedLetters/index';
import './index.scss';
import { ThemeContext } from '../../context/ThemeContext';
import 'animate.css';
import Logo from '../Home/Logo/index';
import {
  faNode,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
  
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const { theme } = useContext(ThemeContext);
  const [skills,setSkills]=useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);
  const toggleSkills=()=>{
     setSkills(!skills)
  }
  return (
    <>
      <div className={theme} id="about-container">
        <div className="about-co">
          <div className="cont">
            <div className="text-z">
              <h1 className="about-p">
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ']}
                  idx={16}
                />

                <Logo />
              </h1>
            </div>
            <div className="par-sect">
              <p className="par">
                I'm Full-Stack developer looking for the opportunity to work
                with the latest technologies on challenging and diverse
                projects.
              </p>
              <p className="par">
               I am passionate about learning new theories and technologies and have a great interest in learning the full development lifecycle.
              </p>
            </div>
          </div>
          <div className='faces'> 
            <div className="fa-skills" onClick={toggleSkills}   >
              <p  className="fa-skill" >Skills</p>
            </div>
            {skills === true &&(
            <>
            <div className="fa-1">
              <FontAwesomeIcon className="fa1" icon={faReact} />
            </div>
            <br/>
            <div className='fa-2-2'>
            <div className="fa-2">
              <FontAwesomeIcon className="fa2" icon={faHtml5} />
            </div>

            </div>
           
            <br/>
            <div className="fa-3">
              <FontAwesomeIcon className="fa3" icon={faNode} />
            </div>
            <br/>
            <div className="fa-4">
              <FontAwesomeIcon className="fa4" icon={faJsSquare} />
            </div>
            <br/>
            <div className="fa-5">
              <FontAwesomeIcon className="fa5" icon={faGitAlt} />
            </div>
            <br/>
            <div className="fa-6">
              <FontAwesomeIcon className="fa6" icon={faCss3Alt} />
            </div>
            <br/>
            <div className="fa-7">
              <FontAwesomeIcon className="fa7" icon={faSass} />
            </div>
            <br/>
          </> 
            )}
            </div>


           <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faNode} />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3Alt} />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} />
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <Loader type="line-spin-fade-loader" />
      </div>
    </>
  );
};

export default About;
