import HomeFooter from "../components/HomeFooter/HomeFooter";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import MiddleSection from "../components/MiddleSection/StatTab";

import "../App.css";

function Home() {
  return (
    <>
      <div className="scanbar"></div>
      <div className="noise"></div>

      <div className="container">
        <div className="ecran radial-gradient">

            <HomeHeader />


            <MiddleSection />


            <HomeFooter />


        </div>
      </div>
    </>
  );
}

export default Home;
