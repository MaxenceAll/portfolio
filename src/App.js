import { BrowserRouter, Routes, Route } from "react-router-dom";


import Stat from "./screens/StatScreen/Stat";
import About from "./screens/About";

import './App.css'

import CVscreen from "./components/CV/CVscreen";
import Map from "./screens/MapScreen/Map";
import Color from "./screens/ColorScreen/Color";

import { useState } from "react";

function App() {

  const [selectedColor, setSelectedColor] = useState("#18dc0c");
  const [selectedColorSecondary, setSelectedColorSecondary] = useState("#11291b");
  const [selectedColorBackground, setSelectedColorBackground] = useState("#11291b");

  function handleColorChange1(color) {
    setSelectedColor(color);
  }
  function handleColorChange2(colorSecondary) {
    setSelectedColorSecondary(colorSecondary);
  }
  function handleColorChange3(colorBackground) {
    setSelectedColorBackground(colorBackground);
  }

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <About />  } />
          <Route path="/stat" element={ <Stat tab_selected="status"/>  } />
          <Route path="/map" element={ <Map />  } />
          <Route path="/color" element={ <Color onColorChange1={handleColorChange1} onColorChange2={handleColorChange2} onColorChange3={handleColorChange3}/>  } />

          <Route path="/about" element={  <About /> } />         
          <Route path="/cv" element={ <CVscreen/> }/>


          {/* Si aucune route connue : */}
          <Route path="*" element={<About />} />
        </Routes>
      </BrowserRouter>

      <style>
        {`
          :root {
            --main-color: ${selectedColor};
            --secondary-color: ${selectedColorSecondary};
            --background-color: ${selectedColorBackground};
          }
        `}
      </style>
    </>
  );
}

export default App;
