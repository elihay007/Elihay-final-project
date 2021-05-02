
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React  from 'react';


import Home from "./Pages/Home" ;
import About from "./Pages/About";
import Contact from "./Pages/Contact" ;
import Courses_And_Academy from "./Pages/Courses_And_Academy" ;  
import Protfolio_career from "./Pages/Protfolio_career" ;
import Footer from "./Pages/Footer";





function App() {
  return (

    <Router>
      <div id="top-menu">
      <span class="span_Elihay">Elihay</span>
      <span class="span_Bizawi">Bizawi</span> 
      </div>
    <div  className="App"  >
    
      <Link to="/">Home /              </Link>
        <Link to="/About" >      About /       </Link>      
        <Link to="/Contact">     Contact   /       </Link>
        <Link to="/Courses_And_Academy">       Courses And Academy   /    </Link>
        <Link to="/Protfolio_career">      Protfolio_career     </Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">         
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Courses_And_Academy">
            <Courses_And_Academy />
          </Route>
          <Route exact path="/Protfolio_career">
            <Protfolio_career />
          </Route>
        </Switch>
        
        <div>
        </div>
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
