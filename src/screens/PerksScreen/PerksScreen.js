import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import SousTabStat from "../../components/SousTabStat/SousTabStat";
import Perks from "../../components/StatSection/Perks/Perks";

import './PerksScreen.css'

function PerksScreen(props) {
    return ( <>
    
    <div className="scanbar"></div>
      <div className="noise"></div>

      <div className="container">

        <div className="ecran radial-gradient">

          <div className="ecran-header">
            <HomeHeader />   
          </div>

          <div className="">

            <div className="">
                <SousTabStat/>
            </div>
            
            <div className="">
                <Perks />
            </div>

          </div>

          <div className="">
            <HomeFooter />
          </div>
        </div>

      </div>
    
    </>);
}

export default PerksScreen;