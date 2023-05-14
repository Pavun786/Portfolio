import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import { Player } from '@lottiefiles/react-lottie-player';


export const About = () => {
  return (
    <>
      <div className="about-animate">
        <div className="about center">

          <div className="home">

            <h2 data-aos="fade-right" className="mobileHead">
              Hello,  I'm <span className="about__name">Pavunkumar.E</span>
            </h2>
            <Type />
            <p className="about__desc" data-aos="fade-right">
            I am MERN Stack Developer.and I am currently looking teamwork jobs in Developer stream for learning & improve my knowledge.
            </p>

            <div className="about__contact">
            <a
              href="https://github.com/Pavun786"
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              className="link link--icon"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:pavun4587@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="mail"
              className="link link--icon"
            >
              <EmailIcon />
            </a>
            <a
              href="tel:+918680864587"
              target="_blank"
              rel="noreferrer"
              aria-label="phone"
              className="link link--icon"
            >
              <PhoneIcon />
            </a>
            
            <a
              href="linkedin.com/in/pavunkumar-e-217886270"
              aria-label="linkedin"
              className="link link--icon"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            
          </div>
          <button
            className="btnResume"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1VueLzoMoAApPWTPC4X3MyYdrRBEOqLoU/view"
              );
            }}
          >
            Resume
          </button>
          </div>

         

        
        </div>

        <div data-aos="fade-right" className="lottiefiles">
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_yd8fbnml.json"
            
        
          >
          </Player>
        </div>
        
      </div>

      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};