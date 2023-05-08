import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import SearchedNPI from "./pages/SearchedNPI";


import Footer from "./components/Footer";

function App() {
  return (
    <div className='container-fluid'>
    
      <nav className='navbar navbar-expand-lg'>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarContent" className='collapse navbar-collapse justify-content-start'>

     

          <ul className='nav nav-pills nav-fill '>
            <li className='nav-item'>
              <Link className="nav-link" to="/">Home</Link>
            </li>
        
            
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      

    

      <SearchedNPI />

      <Footer />
    
    </div>
  );
}

export default App;
