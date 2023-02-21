import Diplomes from "../../components/ExpSection/Diplomes/Diplomes";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import SousTabExp from "../../components/SousTabExp/SousTabExp";


import './DiplomesScreen.css'

function DiplomesScreen(props) {



  return (
    <>
      <div className="scanbar"></div>
      <div className="noise"></div>

      <div className="container">

        <div className="ecran radial-gradient">

          <div className="ecran-header">
            <HomeHeader />   
          </div>

          <div className="expMiddleContainer">

            <div className="expSousTab">
                <SousTabExp/>
            </div>
            
            <div className="ExpDiplome">
                <Diplomes />
            </div>
        </div>

          <div className="ecran-footer">
            <HomeFooter />
          </div>
        </div>

      </div>
    </>
  );
}

export default DiplomesScreen;
