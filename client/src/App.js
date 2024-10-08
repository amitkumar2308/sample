import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Welcome from "./components/Welcome";
import Card from "./components/cards";
function App(){
     return (
    
        <Router>
            <div>
              <Navbar/>
              <Home/>
              <Welcome/>
              <Card/>
            </div>
        </Router>
      
     )
}


export default App;