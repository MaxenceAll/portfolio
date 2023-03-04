import ContactCV from "../../components/ContactCV/ContactCV";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeMiddle from "../../components/HomeMiddle/HomeMiddle";
import SousTabStat from "../../components/SousTabStat/SousTabStat";
import Status from "../../components/StatSection/Status/Status";

import "./Stat.css";

function Stat(props) {
  return (
    <>
      <div className="scanbar"></div>
      <div className="noise"></div>

      <div className="container">
        <div className="ecran radial-gradient">
          <div className="ecran-header">
            <HomeHeader />
          </div>

          {/* <div className="">
            <div className="">
              <HomeMiddle />
            </div>
          </div> */}

          <div className="">
            <div className="">
              <SousTabStat />
            </div>

            <div className="">
              <Status />
              <ContactCV/>
            </div>
          </div>

          

          <div className="">
            <HomeFooter />
          </div>
        </div>
      </div>
    </>
  );
}

export default Stat;
