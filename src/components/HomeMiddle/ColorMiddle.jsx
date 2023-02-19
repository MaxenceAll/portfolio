import './ColorMiddle.css'

import { useEffect } from 'react';

function ColorMiddle() {

    const handleColorClick = (color) => {
      localStorage.setItem("theme",color)

      switch (color) {
        case 'green':
          localStorage.setItem("mainColor","#18dc0c");
          localStorage.setItem("secondaryColor","#11291b");
          localStorage.setItem("backgroundColor","#10170f");          
          break;
        case 'red':
          localStorage.setItem("mainColor","red");
          localStorage.setItem("secondaryColor","#f3aeaea9");
          localStorage.setItem("backgroundColor","#10170f");   
          break;   
      
        default:
          break;
      }
    };

    useEffect(() => {
      function updateColors() {
        const mainColor = localStorage.getItem("mainColor");
        const secondaryColor = localStorage.getItem("secondaryColor");
        const backgroundColor = localStorage.getItem("backgroundColor");
        
        document.documentElement.style.setProperty("--main-color", mainColor);
        document.documentElement.style.setProperty("--secondary-color", secondaryColor);
        document.documentElement.style.setProperty("--background-color", backgroundColor);
      }
  
      // Set the colors initially
      updateColors();
  
      // Update the colors whenever LocalStorage changes
      window.addEventListener("storage", updateColors);
  
      // Clean up the event listener when the component unmounts
      return () => window.removeEventListener("storage", updateColors);
    });
  
    return (
      <>
        <div className="color-container">
          <div className="colorGreen color-active" onClick={() => handleColorClick('green')}>
            Green (default)
          </div>
          <div className="colorRed" onClick={() => handleColorClick('red')}>
            Red
          </div>
          <div className="colorOrange" onClick={() => handleColorClick('orange')}>
            Orange Mutant
          </div>
          <div className="colorIce" onClick={() => handleColorClick('ice')}>
            Ice
          </div>
          <div className="colorNuka" onClick={() => handleColorClick('nuka')}>
            Nuka Cola
          </div>
          <div className="colorGold" onClick={() => handleColorClick('gold')}>
            Gold
          </div>
          <div className="colorPink" onClick={() => handleColorClick('pink')}>
            Pink boy
          </div>
        </div>
      </>
    );
  }
  
  export default ColorMiddle;