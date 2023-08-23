import React from "react";
import {createRoot} from "react-dom/client";
import Home from "./pages/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <main className='w-full mx-auto bg-slate-50'>
    
      <Home />

      <Footer />
    
    </main>
  );
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
