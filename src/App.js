import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import Stat from "./screens/StatScreen/Stat";
import About from "./screens/About";

import './App.css'

import CVscreen from "./components/CV/CVscreen";
import Map from "./screens/MapScreen/Map";
import Color from "./screens/ColorScreen/Color";

function App() {



  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <About />  } />
          <Route path="/stat" element={ <Stat tab_selected="status"/>  } />
          <Route path="/map" element={ <Map />  } />
          <Route path="/color" element={ <Color />  } />

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
