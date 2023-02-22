import Jobs from "../../components/ExpSection/Jobs/Jobs";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import SousTabExp from "../../components/SousTabExp/SousTabExp";

import "./ExpScreen.css";

function ExpScreen(props) {
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
            <div className="">
              <SousTabExp />
            </div>

            <div className="">
              <Jobs />
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

export default ExpScreen;
