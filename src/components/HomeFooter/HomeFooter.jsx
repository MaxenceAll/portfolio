import RadioPlayer from "../RadioPlayer/RadioPlayer";
import "./HomeFooter.css";

function HomeFooter() {
  return (
    <>
      <footer className="ecran-footer">

        <div className="hp-container">
          <p>HP: 34/100</p>
        </div>
        

        <div className="level-container">
          LEVEL 34:
          <div className="level-bar">
            <div className="level-progress"> </div>
          </div>
        </div>


        <div className="ap-container">
          <p>AP: 100/100</p>
        </div>

        <div className="radio-container">
          <RadioPlayer videoId="Ya3WXzEBL1E" />
        </div>
        
      </footer>
    </>
  );
}

export default HomeFooter;
