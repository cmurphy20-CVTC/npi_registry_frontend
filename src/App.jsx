import React from "react";
import {createRoot} from "react-dom/client";
import Home from "./pages/Home";


function App() {
  return (
    <div className='container-fluid '>
    
      <Home />
    
    </div>
  );
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
