import { useState } from "react";
import "./Perks.css";

import curieux from "../../../assets/Perks/curieux.png";
import teamwork from "../../../assets/Perks/teamwork.gif";
import logique from "../../../assets/Perks/logique.png";


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
    "endurance": "10h de code par jour ? No problemo .... avec 10 redbull par heure.",
    "charisma": "Lunettes geeks CHECK. Barbe geek CHECK. Chemise à carreaux geek CHECK.",
    "intelligence": "Suffisamment intélligent pour demander à CHATgpt et relativement comprendre la réponse.",
    "agility": "L'agilité ? C'est débrouissailler du code déprécié, explorer les nouveaux frameworks, avec rien d'autre que son fidèle IDEs dopé d'extensions. Et tout comme un survivaliste, toujours avoir un plan de secours (un dépôt GitHub).",
    "luck": "Pas besoin de chance quand on trafique le Math.random().",
  };

  return (
    <>
      <div className="perks-container">
        <div className="perks-left-side">
        <ul>
            <li onClick={() => handleLiClick(curieux)} className={activeTab === curieux ? "perks-active-tab" : ""}>Curieux.</li> 
            <li onClick={() => handleLiClick(teamwork)} className={activeTab === teamwork ? "perks-active-tab" : ""}>Travail d'équipe.</li>
            <li onClick={() => handleLiClick(logique)} className={activeTab === logique ? "perks-active-tab" : ""}>Logique.</li>
            {/* <li onClick={() => handleLiClick(charisma)} className={activeTab === charisma ? "perks-active-tab" : ""}>Charisma <span className="specialValue">10</span></li> */}
            {/* <li onClick={() => handleLiClick(intelligence)} className={activeTab === intelligence ? "perks-active-tab" : ""}>Intelligence <span className="specialValue">10</span></li> */}
            {/* <li onClick={() => handleLiClick(agility)} className={activeTab === agility ? "perks-active-tab" : ""}>Agility <span className="specialValue">10</span></li> */}
            {/* <li onClick={() => handleLiClick(luck)} className={activeTab === luck ? "perks-active-tab" : ""}>Luck <span className="specialValue">10</span></li> */}
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