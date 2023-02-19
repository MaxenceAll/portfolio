import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import vaultboy from "../../../assets/vaultboy.gif";

import './Status.css'

function Status() {
  return (
    <>
    <div className="StatusContainer">

      <div className="HpHead">
        <div className="hp-bar">
          <div className="hp-bar-progress">
          </div>
        </div>      
      </div>

      <div className="VaultBoy">
        <div className="VaultBoyContainer">
          <img className="animated-gif" src={vaultboy} alt="vault boy marchant" />
        </div>
      </div>

      <div className="HpLeftHand">
        <div className="hp-bar">
          <div className="hp-bar-progress">
          </div>
        </div>
      </div>

      <div className="HpRightHand">
        <div className="hp-bar">
          <div className="hp-bar-progress">
          </div>
        </div>
      </div>

      <div className="HpLeftFeet">
        <div className="hp-bar">
          <div className="hp-bar-progress">
          </div>
        </div>
      </div>

      <div className="HpRightFeet">
        <div className="hp-bar">
          <div className="hp-bar-progress-bis">
          </div>
        </div>
      </div>


      <div className="StatusFooter">
        <ul>
          <li>
            <FaHtml5 />
          </li>
          <li>
            <FaCss3Alt />
          </li>
          <li>
            <FaJs />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
            <FaJava />
          </li>
          <li>
            <SiCsharp />
          </li>
          
        </ul>
      </div>

    </div>
    </>
  );
}

export default Status;
