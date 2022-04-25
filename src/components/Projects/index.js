import './index.scss';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import AnimatedLetters from '../AnimatedLetters/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  DialogContent, DialogTitle } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Dialog from '@mui/material/Dialog';
import { Tabs } from '@mui/material';
import { Tab } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import data from '../../assets/Data/data';
const Projcet = () => {
  const [letterClass, setLetterClass] = useState('text-animate');


  const { theme, setTheme } = useContext(ThemeContext);
  const [tag, setTag] = useState('All');
  const [project, setProject] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="project-container">
        <div className={theme}>
          <div className="pro-wrap">
            <div className="project-title">
              <h1 className="letters">
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                  idx={15}
                />
              </h1>
            </div>
            <div>
              <h2 className="porojects_par">Some of the projects</h2>
              <div>
                <Tabs
                  value={tag}
                  className="custom"
                  indicatorColor="gray"
                  onChange={(event, newValue) => setTag(newValue)}
                >
                  <Tab
                    value="All"
                    label="All"
                    className={
                      tag ? 'custom_item active' : 'custom_item'
                    }
                  />
                  {[...new Set(data.projects.map((item) => item.tag))].map(
                    (tag) => (
                      <Tab
                        label={tag}
                        value={tag}
                        className={
                          tag === tag
                            ? 'custom_item active'
                            : 'custom_item'
                        }
                      />
                    )
                  )}
                </Tabs>
              </div>
            </div>
            <div className="post_wrapper">
              {data.projects.map((item) => (
                <>
                  {tag === item.tag || tag === 'All' ? (
                    <div
                      className="project-post"
                      onClick={() => setProject(item)}
                    >
                      <img
                        // onClick={handleShow}
                        className="thum"
                        src={item.image}
                        alt="register page"
                      ></img>
                      <div className="preview">
                        <h2 className="post-title"> {item.title}</h2>
                        <p className="post-intro">{item.description}</p>
                      </div>
                    </div>
                  ) : null}
                </>
              ))}
            </div>

            <Dialog open={project} className="dail">
              <DialogTitle className="post-title">{project.title}</DialogTitle>
              <DialogContent>
                <div className="close_x">
                  <button onClick={() => setProject(false)}>X</button>
                </div>

                {project?.images?.map((image, index) => (
                  <Carousel
                    className="project_image"
                    autoPlay
                    interval="5000"
                    transitionTime="2000"
                    showThumbs={false}
                  >
                    <img
                      className="thumnail"
                      src={image.image_1}
                      alt="create URL"
                    ></img>
                    <img
                      className="thumnail"
                      src={image.image_2}
                      alt="create URL"
                    ></img>
                    <img
                      className="thumnail"
                      src={image.image_3}
                      alt="create URL"
                    ></img>
                  </Carousel>
                ))}

                <p className="post-intro">{project.info}</p>
                {project?.links?.map((link, index) => (
                  <div key={index}>
                    <a
                      target="_blank"
                      className="git"
                      rel="noreferrer"
                      href={link.link}
                    >
                      <FontAwesomeIcon icon={link.icon} color="#4d4d4e" />
                    </a>
                  </div>
                ))}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projcet;
