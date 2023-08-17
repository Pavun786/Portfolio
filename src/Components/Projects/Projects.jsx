import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
// import BookMyShow from "../../assets/BookMyShow.jpg";
import Project from "../../assets/Project1.jpg";
import Project2 from "../../assets/Project2.png";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                 
                    src={Project}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Equipment Hiring Portal</h2>
                <p>
                Equpiment hiring is online websie.its used to rent the product for temporary usage.
                </p>
                <div>
                <FaReact color="#5bc0de" />
                  <BsBootstrap color="#59287a" />
                  <SiMongodb color="4DB33D" />
                  <SiNodedotjs color="#3c873a" />
                  <SiExpress color="68A063"/>
                </div>
                <div>
                  <a
                    href="https://visionary-baklava-331970.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    style={{textDecoration:"none"}}
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Pavun786/Equipment-Rental-Portal-Frontend.git"
                    target="_blank"
                    rel="noreferrer"
                    style={{textDecoration:"none"}}
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
              
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                 
                    src={Project2}
                    alt="React Markdown viewer"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>React Markdown Viewer</h2>
                <p>
                React-markdown is a react component that converts Markdown text into the corresponding HTML code.
                </p>
                <div>
                <FaReact color="#5bc0de" />
                  <BsBootstrap color="#59287a" />
                  <SiMongodb color="4DB33D" />
                  <SiNodedotjs color="#3c873a" />
                  <SiExpress color="68A063"/>
                </div>
                <div>
                  <a
                    href="https://react-markdown-viewer-frontend.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    style={{textDecoration:"none"}}
                  >
                    <span type="button" className="btns onbt onbt" >
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Pavun786/React-Markdown-Viewer-Frontend.git"
                    target="_blank"
                    rel="noreferrer"
                    style={{textDecoration:"none"}}
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
              
            </div>
          </div>

          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                 
                    src={Project2}
                    alt="Ecommerce Application image"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Ecommerce Application</h2>
                <p>
                An ecommerce app allows users to shop online, browse product catalogs, create wish lists, add items to a cart, and complete purchases. It also provides payment processing,
                </p>
                <div>
                <FaReact color="#5bc0de" />
                  <BsBootstrap color="#59287a" />
                  <SiMongodb color="4DB33D" />
                  <SiNodedotjs color="#3c873a" />
                  <SiExpress color="68A063"/>
                </div>
                <div>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    style={{textDecoration:"none"}}
                  >
                    <span type="button" className="btns onbt onbt" >
                      See this Live
                    </span>
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    style={{textDecoration:"none"}}
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
              
            </div>
          </div> */}

        </div>
      </div>
    </>
  );
};