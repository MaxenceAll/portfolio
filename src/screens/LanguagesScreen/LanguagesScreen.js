import Diplomes from "../../components/ExpSection/Diplomes/Diplomes";
import Languages from "../../components/ExpSection/Languages/Languages";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import SousTabExp from "../../components/SousTabExp/SousTabExp";


import './LanguagesScreen.css'

function LanguagesScreen(props) {



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
            
            <div className="ExpLanguage">
                <Languages />
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

export default LanguagesScreen;
