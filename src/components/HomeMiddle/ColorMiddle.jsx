import React, { useState } from 'react';
import './ColorMiddle.css';

function ColorMiddle(props) {
  const [activeColor, setActiveColor] = useState('green'); // Default active color is 'green'

  function handleColorOptionClick(color) {
    setActiveColor(color); // Update the active color state when a color is clicked
    props.onColorChange1(getColorValue(color, 'primary'));
    props.onColorChange2(getColorValue(color, 'secondary'));
    props.onColorChange3(getColorValue(color, 'background'));
  }

  function getColorValue(color, type) {
    // Define color values for each type and color
    const colorValues = {
      green: { primary: '#18dc0c', secondary: '#11291b', background: '#10170f' },
      red: { primary: '#ff0000', secondary: '#864e4e', background: '#240804' },
      orange: { primary: '#ffa07a', secondary: '#d86800', background: '#3d2300' },
      ice: { primary: '#ffffff', secondary: '#808080', background: '#000000' },
      nuka: { primary: '#33ffff', secondary: '#0088dd', background: '#002233' },
      gold: { primary: '#f1c40f', secondary: '#8a7e3d', background: '#272100' },
      pink: { primary: '#ffc0cb', secondary: '#f77288', background: '#63212c' },
    };

    return colorValues[color][type];
  }

  return (
    <div className="color-container">
      <div
        className={`colorGreen ${activeColor === 'green' ? 'color-active' : ''}`}
        onClick={() => handleColorOptionClick('green')}
      >
        Green (default)
      </div>
      <div
        className={`colorRed ${activeColor === 'red' ? 'color-active' : ''}`}
        onClick={() => handleColorOptionClick('red')}
      >
        Red
      </div>
      <div
        className={`colorOrange ${activeColor === 'orange' ? 'color-active' : ''}`}
        onClick={() => handleColorOptionClick('orange')}
      >
        Orange Mutant
      </div>
      <div
        className={`colorIce ${activeColor === 'ice' ? 'color-active' : ''}`}
        onClick={() => handleColorOptionClick('ice')}
      >
        Ice
      </div>
      <div
        className={`colorNuka ${activeColor === 'nuka' ? 'color-active' : ''}`}
        onClick={() => handleColorOptionClick('nuka')}
      >
        Nuka Cola
      </div>
      <div
        className={`colorGold ${activeColor === 'gold' ? 'color-active' : ''}`}
        onClick={() => handleColorOptionClick('gold')}
      >
        Gold
      </div>
      <div
        className={`colorPink ${activeColor === 'pink' ? 'color-active' : ''}`}
        onClick={() => handleColorOptionClick('pink')}
      >
        Pink boy
      </div>
    </div>
  );
}

export default ColorMiddle;
