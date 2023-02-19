import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import ColorMiddle from "../../components/HomeMiddle/ColorMiddle";

import './Color.css'

function Color(props) {

  function handleColorChange1(color) {
    props.onColorChange1(color);

  }
  function handleColorChange2(colorSecondary) {
    props.onColorChange2(colorSecondary);
  }
  function handleColorChange3(colorBackground) {
    props.onColorChange3(colorBackground);
  }

  return (
    <>
      <div className="scanbar"></div>
      <div className="noise"></div>

      <div className="container">

        <div className="ecran radial-gradient">

          <div className="ecran-header">
            <HomeHeader />   
          </div>
          <div className="ecran-section">
            <ColorMiddle onColorChange1={handleColorChange1} onColorChange2={handleColorChange2} onColorChange3={handleColorChange3}/> 
          </div>
          <div className="ecran-footer">
            <HomeFooter />
          </div>
        </div>

      </div>
    </>
  );
}

export default Color;
