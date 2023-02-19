import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import About from "./screens/About";

import './App.css'

import CVscreen from "./components/CV/CVscreen";

function App() {
  return (
    <>
      <div className="scanbar"></div>
      <div className="noise"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />  } />
          <Route path="/about" element={  <About /> } />         
          <Route path="/cv" element={ <CVscreen/> }/>


          {/* Si aucune route connue : */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
