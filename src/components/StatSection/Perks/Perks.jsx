import { useState } from "react";
import "./Perks.css";

import curieux from "../../../assets/Perks/curieux.png";
import teamwork from "../../../assets/Perks/teamwork.gif";
import logique from "../../../assets/Perks/logique.png";
import management from "../../../assets/Perks/management.png";


function Perks() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const handleLiClick = (image) => {
    setSelectedImage(image);
    setActiveTab(image);
  };

  const imageTexts = {
    "curieux": "curieux description",
    "teamwork": "team work description",
    "logique": "logique description",
    "management": "management description"
  };

  return (
    <>
      <div className="perks-container">
        <div className="perks-left-side">
        <ul>
            <li onClick={() => handleLiClick(curieux)} className={activeTab === curieux ? "perks-active-tab" : ""}>Curieux.</li> 
            <li onClick={() => handleLiClick(teamwork)} className={activeTab === teamwork ? "perks-active-tab" : ""}>Travail d'équipe.</li>
            <li onClick={() => handleLiClick(logique)} className={activeTab === logique ? "perks-active-tab" : ""}>Logique.</li>
            <li onClick={() => handleLiClick(management)} className={activeTab === management ? "perks-active-tab" : ""}>Management.</li>
          </ul>
        </div>

        <div className="perks-right-side">
        {selectedImage ? (
              <div>
                <img src={selectedImage} alt="représentant la sélection" />
                <p>{imageTexts[selectedImage.split("/").pop().split(".")[0]]}</p>
              </div>
            ) : (
              <div></div>
            )}
        </div>
      </div>
    </>
  );
}

export default Perks;

// teampwork
// management
// autonomie
// adaptability
// meticuleux 
// analytique