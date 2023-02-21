import Jobs from "../../components/ExpSection/Jobs/Jobs";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import SousTabExp from "../../components/SousTabExp/SousTabExp";


import './ExpScreen.css'

function ExpScreen(props) {



  return (
    <>
      <div className="scanbar"></div>
      <div className="noise"></div>

      <div className="container">

        <div className="ecran radial-gradient">

          <div className="ecran-header">
            <HomeHeader />   
          </div>

          <div className="statMiddleContainer">

            <div className="statSousTab">
                <SousTabExp/>
            </div>
            
            <div className="StatSpecial">
                <Jobs />
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

export default ExpScreen;
