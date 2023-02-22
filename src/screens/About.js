import HomeFooter from "../components/HomeFooter/HomeFooter";
import HomeHeader from "../components/HomeHeader/HomeHeader";

import './About.css'
import RadioPlayer from "../components/RadioPlayer/RadioPlayer";

function Home() {

  return (
    
    <>
      <div className="scanbar"></div>
      <div className="noise"></div>

      <div className="container">
        <div className="ecran radial-gradient">

        <div className="ecran-header">
            <HomeHeader />   
          </div>

            <div className="About-content">
              <p>  
                Bienvenue sur mon site, blablablabla, explication de la référence, explication situation bla bla bla   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil blanditiis minima possimus obcaecati hic, ea porro quos id aliquid soluta earum unde voluptates at sit magnam architecto suscipit, reprehenderit voluptatibus totam aliquam quia omnis corrupti illo ex! Unde blanditiis amet, quae sint laboriosam dolor tenetur.
              </p>
              <div>Cliquez ici pour commencer !</div>
            </div>

            <div className="">
              <HomeFooter />
            </div>


        </div>
      </div>
    </>
  );
}

export default Home;
