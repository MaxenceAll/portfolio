import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeMiddle from "../../components/HomeMiddle/HomeMiddle";


import './Stat.css'

function Stat(props) {

  let myPropValue = props.myProp;

  return (
    <>
      <div className="scanbar"></div>
      <div className="noise"></div>

      <div className="container">

        <div className="ecran radial-gradient">

          <div className="ecran-header">
            <HomeHeader />   
          </div>
          <div className="ecran-section">
            <HomeMiddle />
          </div>
          <div className="ecran-footer">
            <HomeFooter />
          </div>
        </div>

      </div>
    </>
  );
}

export default Stat;
