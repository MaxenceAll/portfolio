import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import About from "./screens/About";

import './App.css'

import CVscreen from "./components/CV/CVscreen";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <About />  } />
          <Route path="/stat" element={ <Home />  } />

          <Route path="/about" element={  <About /> } />         
          <Route path="/cv" element={ <CVscreen/> }/>


          {/* Si aucune route connue : */}
          <Route path="*" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
