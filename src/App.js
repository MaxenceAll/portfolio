import { BrowserRouter, Routes, Route } from "react-router-dom";


import Stat from "./screens/StatScreen/Stat";
import About from "./screens/About";

import './App.css'

import CVscreen from "./components/CV/CVscreen";
import Map from "./screens/MapScreen/Map";
import Color from "./screens/ColorScreen/Color";

import { useState } from "react";
import { useEffect } from "react";

import SpecialScreen from "./screens/SpecialScreen/SpecialScreen";
import PerksScreen from "./screens/PerksScreen/PerksScreen";

function App() {



  useEffect(() => {
    const handleMouseMove = (event) => {
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;
    
      let mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
      let mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
      let radialGradient = `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, var(--secondary-color), var(--background-color))`;
      let elements = document.querySelectorAll('.radial-gradient');
    
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.background = radialGradient;
      }
    }
    
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])


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
      brightnessValue = "65%";
      huerotateValue = "300deg";
      saturateValue = "1000%";
      break;
    // if orange
    case "#ffa07a":
      brightnessValue = "90%";
      huerotateValue = "340deg";
      saturateValue = "1000%";
      break;
    // if ice
    case "#0000ff":
      brightnessValue = "90%";
      huerotateValue = "0deg";
      saturateValue = "000%";
      break;
    // if nuka cola
    case "#33ffff":
      brightnessValue = "90%";
      huerotateValue = "165deg";
      saturateValue = "500%";
      break;
    // if gold
    case "#f1c40f":
      brightnessValue = "80%";
      huerotateValue = "360deg";
      saturateValue = "1000%";
      break;
    // if pink
    case "#ffc0cb":
      brightnessValue = "80%";
      huerotateValue = "270deg";
      saturateValue = "1000%";
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

      <style>
        {`
        
        .scanbar::before {
          background-image: linear-gradient(
        0deg,
        transparent 0%,
        ${selectedColorBackground}33 1%,
        ${selectedColor}cc 2%,
        ${selectedColorBackground}33 2%,
        transparent 100%);
        }
        
        `}        
      </style>

      <script>

        
      </script>
      
    </>
  );
}

export default App;
