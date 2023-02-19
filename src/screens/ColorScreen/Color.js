import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import ColorMiddle from "../../components/HomeMiddle/ColorMiddle";

import { useState } from "react";


import './Color.css'

function Color() {



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
            <ColorMiddle />
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
