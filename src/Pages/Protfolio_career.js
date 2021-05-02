import React  from "react";
import Nokia from "../Picture/Nokia.jpg";
import Siemens from "../Picture/siemens.jpg";


function Protfolio_career(props) {
    
    
  
    return (
      <div className="About">
     

      <div className="About-img">
        <img src={Nokia} alt="img" />
      </div>

      <div className="About-description">
        <h1 className="About-description-title">Elihay Bizawi</h1>
        <h4 className="About-description-subtitle">
        IT Support , System ,Lab Owener 
        </h4>

        <p className="About-description-details">
          working in Nokia at the last 5 and a helf years.
          in the first 3 and a helf years i was the IT Support Manager .
          and in the last two years im Lab Owener of the Nokia CloudBand-CBIS .
          supporting QA & R&D Team .

        </p>

        <div className="About">
      
       
      

      <div className="About-img">
        <img src={Siemens} alt="img" />
      </div>

      <div className="About-description">
        <h1 className="About-description-title">Elihay Bizawi</h1>
        <h4 className="About-description-subtitle">
        IT Support , System ,Lab Owener 
        </h4>

        <p className="About-description-details">
          
          working in Siemens for 1 year  as an a IT Admin .
          I was part of HBS Project team in the Israeli national Airport 2000  .
          we build all sorters in the Airport 2000 since 2010 to 2015.


        </p>

        
        </div>
      </div>
        </div>
      </div>
      
    );
  }




export default Protfolio_career;