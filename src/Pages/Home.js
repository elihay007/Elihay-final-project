import React  from 'react'
import './Home.css'
// import { Helmet } from "react-helmet";
import elihayProfile from "../Picture/Support.jpg";



function Home(props) {
    
  // const Home = () => {
    
      
  
    return (
      <div className="Home">
          
          {/* <Helmet>
        <title>Elihay Bizawi | IT Support & System</title>
       
      </Helmet> */}

      <div className="Home-img">
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
        
         
     


export default Home;