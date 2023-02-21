import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import DataMiddle from "../../components/HomeMiddle/DataMiddle";


import './DataScreen.css'

function DataScreen() {


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
            <DataMiddle />
          </div>
          <div className="">
            <HomeFooter />
          </div>
        </div>

      </div>
    </>
  );
}

export default DataScreen;
