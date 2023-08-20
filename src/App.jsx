import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-auto h-[100vh] w-full bg-slate-50">
      <Home />

      <Footer />

    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
