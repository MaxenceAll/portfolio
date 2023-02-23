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
            handleColorOptionClick3("#10170f");
          }
        }
        >
          Green (default)
        </div>
        <div className="colorRed" 
        onClick={() => 
          {
            handleColorOptionClick1("#ff0000");
            handleColorOptionClick2("#864e4e");
            handleColorOptionClick3("#240804");
          }
        }
        >
          Red
        </div>


        <div className="colorOrange" 
        onClick={() =>
          {
            handleColorOptionClick1("#ffa07a")
            handleColorOptionClick2("#d86800")
            handleColorOptionClick3("#3d2300")
          }
        }
        >
          Orange Mutant
        </div>



        <div className="colorIce" 
        onClick={() => 
          {
            handleColorOptionClick1("#ffffff")
            handleColorOptionClick2("#808080")
            handleColorOptionClick3("#000000")
          }
        }
        >
          Ice
        </div>


        <div className="colorNuka" 
        onClick={() => 
          {
            handleColorOptionClick1("#33ffff")
            handleColorOptionClick2("#0088dd")
            handleColorOptionClick3("#002233")
          }
        }
        >
          Nuka Cola
        </div>



        <div className="colorGold" 
        onClick={() => 
          {
            handleColorOptionClick1("#f1c40f")
            handleColorOptionClick2("#8a7e3d")
            handleColorOptionClick3("#272100")
          }
        }
        >
          Gold
        </div>


        <div className="colorPink" 
        onClick={() => 
          {
            handleColorOptionClick1("#ffc0cb")
            handleColorOptionClick2("#f77288")
            handleColorOptionClick3("#63212c")
          }
        }
        >
          Pink boy
        </div>

      </div>
    </>
    );
  }
  
  export default ColorMiddle;