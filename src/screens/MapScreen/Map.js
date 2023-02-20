import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import MapMiddle from "../../components/HomeMiddle/MapMiddle";


import './Map.css'

function Map() {


  return (
    <>
      <div className="scanbar"></div>
      <div className="noise"></div>

      <div className="container">

        <div className="ecran radial-gradient">

          <div className="">
            <HomeHeader />   
          </div>
          <div className="">
            <MapMiddle />
          </div>
          <div className="">
            <HomeFooter />
          </div>
        </div>

      </div>
    </>
  );
}

export default Map;
