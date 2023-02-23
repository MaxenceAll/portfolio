// import HomeFooter from "../components/HomeFooter/HomeFooter";
// import HomeHeader from "../components/HomeHeader/HomeHeader";

import './About.css'
import ContactCV from "../components/ContactCV/ContactCV";
import AboutContent from "../components/AboutContent/AboutContent";

function Home() {

  return (
    
    <>
      <div className="scanbar"></div>
      <div className="noise"></div>

      <div className="container">
        <div className="ecran radial-gradient">

        {/* <div className="ecran-header">
            <HomeHeader />   
          </div> */}

          <div className="About-content">

            <AboutContent/>

          </div>

            <div className="ContactCV">
            {/* <div className="">
              <HomeFooter />
            </div> */}            
              <ContactCV/>
            </div>




        </div>

      </div>
    </>
  );
}

export default Home;
