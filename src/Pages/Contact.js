import React from "react";
import "./Contact.css";
// import mailIcon from "../icons/mail.png";
import elihayProfile from "../Picture/Elihay.jpg";


const Contact = () => {
  return (
    <div className="Contact">
     

      <div className="About-img">
        <img src={elihayProfile} alt="img" />
      </div>



      <div >
        
          
        

        
          <span className="Contact-info-span">
            Email:   
            <span className="Contact-email"> elihay007@gmail.com</span>
          </span>
          
      </div>
    </div>
  );
};

export default Contact;
