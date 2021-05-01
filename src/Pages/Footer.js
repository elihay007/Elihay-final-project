
import React from "react";
import "./Footer.css";
import github from "../icons/github.png";
import youtube from "../icons/youtube.png";
import linkedin from "../icons/linkedin-logo.png";



const Footer = () => {
    return (
      <footer className="Footer">
          
        <div className="Footer-icons">
          <a href="https://github.com/Elihay007">
            <img src={github} alt="udemy-icon" className="fa-icon" />
          </a>
          <a href="https://www.linkedin.com/in/ElihayBizawi">
            <img src={linkedin} alt="udemy-icon" className="fa-icon" />
          </a>
          <a href="https://www.youtube.com/watch?v=FC5A6UOr_wg">
            <img src={youtube} alt="udemy-icon" className="fa-icon" />
          </a>
         
        </div>
      </footer>
    );
  };
  
  export default Footer;