import React from "react";
import "./About.css";
import elihayProfile from "../Picture/Elihay.jpg";




const About = () => {
  return (
    <div className="About">
      

      <div className="About-img">
        <img src={elihayProfile} alt="img" />
      </div>

      <div className="About-description">
        <h1 className="About-description-title">Elihay Bizawi</h1>
        <h4 className="About-description-subtitle">
        IT Support , System ,Lab Owener 
        </h4>

        <p className="About-description-details">
          I am doing IT Support and System  for almost 10 years.
          working in Nokia at the last 5 and a helf years.
          in the first 3 and a helf years i was the IT Support Manager .
          and in the last two years im Lab Owener of the Nokia CloudBand-CBIS .
          supporting QA & R&D Team .

        </p>

        
        </div>
      </div>
    
  );
};

export default About;
