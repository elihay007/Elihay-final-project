import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Courses_And_Academy from "./Courses_And_Academy";
import Protfolio_career from "./Protfolio_career";
import { Switch, Route, Link } from "react-router-dom";
import "./Top.css";
import { Navbar, Nav } from "react-bootstrap";

const Top = () => {
  const [navExpended, setNavExpended] = useState(false);

  return (
    <div className="Top">
      <header className="header">
        {
          <Navbar expanded={navExpended} collapseOnSelect expand="xl" variant="dark">
            <Navbar.Brand>
              <h2>
                <span className="nameColor">Elihay</span> Bizawi
              </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" 
            onClick={() => setNavExpended(navExpended ? false : "expanded")}
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Link onClick={() =>setNavExpended(false)} className="navigationLink" to="/Pages/">
                  Home
                </Link>
                <Link onClick={() =>setNavExpended(false)} className="navigationLink" to="/Pages/About">
                  About
                </Link>
                <Link onClick={() =>setNavExpended(false)} className="navigationLink" to="/Pages/Pages/Contact">
                  Contact
                </Link>
                <Link onClick={() =>setNavExpended(false)} className="navigationLink" to="/Pages/Courses_And_Academy">
                Courses_And_Academy
                </Link>
                <Link onClick={() =>setNavExpended(false)} className="navigationLink" to="/Pages/Protfolio_career">
                Protfolio_career
                </Link>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        }
      </header>
      <Switch>
        <Route exact path="Pages//" component={Home} />
        <Route exact path="/Pages/About" component={About} />
        <Route exact path="/Pages/Contact" component={Contact} />
        <Route exact path="/Pages/Courses_And_Academy" component={Courses_And_Academy} />
        <Route exact path="/Pages/Protfolio_career" component={Protfolio_career} />
        
      </Switch>
    </div>
  );
};

export default Top;
