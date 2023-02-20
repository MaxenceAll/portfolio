import { BrowserRouter, Routes, Route } from "react-router-dom";


import Stat from "./screens/StatScreen/Stat";
import About from "./screens/About";

import './App.css'

import CVscreen from "./components/CV/CVscreen";
import Map from "./screens/MapScreen/Map";
import Color from "./screens/ColorScreen/Color";

import { useState } from "react";
import SpecialScreen from "./screens/SpecialScreen/SpecialScreen";
import PerksScreen from "./screens/PerksScreen/PerksScreen";

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

  let brightnessValue = "";
  let huerotateValue = "";
  let saturateValue = "";

  switch (selectedColor) {
    // if green:
    case "#18dc0c":
      brightnessValue = "65%";
      huerotateValue = "50deg";
      saturateValue = "1000%";
      break;
    // if red
    case "#ff0000":
      brightnessValue = "20%";
      huerotateValue = "0deg";
      saturateValue = "5000%";
      break;
    // if orange
    case "#ffa07a":
      brightnessValue = "81%";
      huerotateValue = "10deg";
      saturateValue = "200%";
      break;
    // if ice
    case "#0000ff":
      brightnessValue = "90%";
      huerotateValue = "200deg";
      saturateValue = "200%";
      break;
    // if nuka cola
    case "#33ffff":
      brightnessValue = "120%";
      huerotateValue = "200deg";
      saturateValue = "200%";
      break;
    // if gold
    case "#f1c40f":
      brightnessValue = "70%";
      huerotateValue = "25deg";
      saturateValue = "800%";
      break;
    // if pink
    case "#ffc0cb":
      brightnessValue = "50%";
      huerotateValue = "300deg";
      saturateValue = "400%";
      break;

    default:
      break;
  }

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <About />  } />
          <Route path="/stat/status" element={ <Stat tab_selected="status"/>  } />
          <Route path="/stat/special" element={ <SpecialScreen tab_selected="status"/>  } />
          <Route path="/stat/perks" element={ <PerksScreen tab_selected="status"/>  } />

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

      

      <style>
        {`
        
        img{
          filter: 
          grayscale(100%) 
          sepia(100%) 
          brightness(${brightnessValue}) 
          hue-rotate(${huerotateValue}) 
          saturate(${saturateValue}) 
          contrast(0.8)
        }
        
        `}        
      </style>

      
    </>
  );
}

export default App;
