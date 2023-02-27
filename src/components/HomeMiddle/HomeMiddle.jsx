import './HomeMiddle.css'
import Status from "../StatSection/Status/Status";
import SousTabStat from "../SousTabStat/SousTabStat";
import ContactCV from "../ContactCV/ContactCV";

function HomeMiddle() {
  return (
    <>
        <div className="HomeMiddleContainer">

            <div className="HomeMiddleHeader">
                <SousTabStat />
            </div>

            <div className="HomeMiddleContent">
               <Status />
            </div> 

          <div className="HomeMiddleContent--ContactCV">
              <ContactCV/>
          </div>    

        </div>

        
    </>
  );
}

export default HomeMiddle;
