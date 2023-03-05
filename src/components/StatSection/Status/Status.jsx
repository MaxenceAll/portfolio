import vaultboy from "../../../assets/vaultboy.gif";

import {
  SiIntellijidea,
  SiWindowsterminal,
  SiVisualstudio,
  SiGooglechrome,
  SiEclipseide,
  SiGit,
  SiPhpmyadmin,
  SiDiscord,
  SiWindows,
} from "react-icons/si";

import "./Status.css";

function Status() {
  return (
    <>
      <div className="StatusContainer">
        <div className="HpHead">
          <div className="hp-bar">
            <div className="hp-bar-progress">
              <p>100%</p>
            </div>
          </div>
        </div>

        <div className="VaultBoy">
          <div className="VaultBoyContainer">
            <img
              className="animated-gif"
              src={vaultboy}
              alt="vault boy marchant"
            />
          </div>
        </div>

        <div className="HpLeftHand">
          <div className="hp-bar">
            <div className="hp-bar-progress">
              <p>100%</p>
            </div>
          </div>
        </div>

        <div className="HpRightHand">
          <div className="hp-bar">
            <div className="hp-bar-progress">
              <p>100%</p>
            </div>
          </div>
        </div>

        <div className="HpLeftFeet">
          <div className="hp-bar">
            <div className="hp-bar-progress">
              <p>100%</p>
            </div>
          </div>
        </div>

        <div className="HpRightFeet">
          <div className="hp-bar">
            <div className="hp-bar-progress-bis">
              <p>75%</p>
            </div>
          </div>
        </div>

        <div className="StatusFooter">
          <div className="StatusFooter-container">
            <ul>
              <li>
                <SiIntellijidea />
              </li>
              <li>
                <SiWindowsterminal />
              </li>
              <li>
                <SiVisualstudio />
              </li>
              <li>
                <SiGooglechrome />
              </li>
              <li>
                <SiEclipseide />
              </li>
              <li>
                <SiGit />
              </li>
              <li>
                <SiPhpmyadmin />
              </li>
              <li>
                <SiDiscord />
              </li>
              <li>
                <SiWindows />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Status;
