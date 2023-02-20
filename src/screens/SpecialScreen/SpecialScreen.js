import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import SousTabStat from "../../components/SousTabStat/SousTabStat";
import Special from "../../components/StatSection/Special/Special";

import './SpecialScreen.css'

function SpecialScreen(props) {
    return ( <>
    
    <div className="scanbar"></div>
      <div className="noise"></div>

      <div className="container">

        <div className="ecran radial-gradient">

          <div className="ecran-header">
            <HomeHeader />   
          </div>

          <div className="statMiddleContainer">

            <div className="statSousTab">
                <SousTabStat/>
            </div>
            
            <div className="StatSpecial">
                <Special />
            </div>

          </div>

          <div className="ecran-footer">
            <HomeFooter />
          </div>
        </div>

      </div>
    
    </>);
}

export default SpecialScreen;