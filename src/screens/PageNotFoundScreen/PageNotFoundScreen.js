import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import PageNotFound from "../../components/PageNotFound/PageNotFound";

import "./PageNotFoundScreen.css";

function PageNotFoundScreen(props) {
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
            <div className="ecran-section">
              <PageNotFound/>
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

export default PageNotFoundScreen;
