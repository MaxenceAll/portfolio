import HomeFooter from "../components/HomeFooter/HomeFooter";
import HomeHeader from "../components/HomeHeader/HomeHeader";

import './About.css'

function Home() {
  return (
    <>
      <div className="scanbar"></div>
      <div className="noise"></div>

      <div className="container">
        <div className="ecran radial-gradient">

            <HomeHeader />

            <div className="About-content">
              <p>  
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, dolor? Fugit odit hic esse, possimus et reprehenderit dolor explicabo ea facilis, doloremque earum tempora, placeat optio iusto ratione consequuntur ex aspernatur aperiam. Accusantium temporibus sunt omnis amet dignissimos consectetur molestias quidem odit quam atque provident, dolores error saepe laboriosam odio perspiciatis consequatur facere beatae, voluptatem deserunt laborum repudiandae. Ducimus odit harum possimus dolorem. Dolorum libero atque velit aspernatur nesciunt cum veniam et hic incidunt harum, voluptatibus totam repellat. Nobis, alias!
              </p>
            </div>

            <HomeFooter />


        </div>
      </div>
    </>
  );
}

export default Home;
