import './ColorMiddle.css'


function ColorMiddle(props) {  
  
  function handleColorOptionClick1(color) {
    props.onColorChange1(color);
  }
  function handleColorOptionClick2(colorSecondary) {
    props.onColorChange2(colorSecondary);
  }
  function handleColorOptionClick3(colorBackground) {
    props.onColorChange3(colorBackground);
  }
  
    return (
    <>
      <div className="color-container">
        <div className="colorGreen color-active" 
        onClick={() => 
          {
          handleColorOptionClick1("#18dc0c");
          handleColorOptionClick2("#11291b");
          handleColorOptionClick3("#11291b");
          }
        }
        >
          Green (default)
        </div>
        <div className="colorRed" 
        onClick={() => 
          {
          handleColorOptionClick1("#e74c3c");
          handleColorOptionClick2("#f3aeaea9");
          handleColorOptionClick3("#10170f");
          }
        }
        >
          Red
        </div>


        {/* <div className="colorOrange" 
        onClick={() => handleColorOptionClick("#ffa07a")}
        >
          Orange Mutant
        </div>
        <div className="colorIce" 
        onClick={() => handleColorOptionClick("#81ecec")}
        >
          Ice
        </div>
        <div className="colorNuka" 
        onClick={() => handleColorOptionClick("#f5b041")}
        >
          Nuka Cola
        </div>
        <div className="colorGold" 
        onClick={() => handleColorOptionClick("#f1c40f")}
        >
          Gold
        </div>
        <div className="colorPink" 
        onClick={() => handleColorOptionClick("#fd79a8")}
        >
          Pink boy
        </div> */}

      </div>
    </>
    );
  }
  
  export default ColorMiddle;