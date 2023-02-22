import { useState } from "react";
import "./Perks.css";

import curieux from "../../../assets/Perks/curieux.png";
import teamwork from "../../../assets/Perks/teamwork.png";
import logique from "../../../assets/Perks/logique.png";
import management from "../../../assets/Perks/management.png";
import autonomie from "../../../assets/Perks/autonomie.webp";
import rigoureux from "../../../assets/Perks/rigoureux.png";
import adaptabilite from "../../../assets/Perks/adaptabilite.webp";
import analytique from "../../../assets/Perks/analytique.webp";

import vaultboy from "../../../assets/Perks/vaultboypouce.png";


function Perks() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const handleLiClick = (image) => {
    setSelectedImage(image);
    setActiveTab(image);
  };

  const imageTexts = {
    //TODO modifier les description
    "teamwork": "Mon expérience professionel a fait que cet aspect essentiel en tant que dev. soit maitrisé.",
    "curieux": "Constamment curieux pour apprendre et innover, et résoudre les problèmes complexes grâce à une exploration constante de nouvelles technologies et méthodologies de développement.",    
    "logique": "Essentiel pour résoudre des problèmes complexes en utilisant une pensée claire, structurée et rationnelle.",
    "management": "J'ai pu dans mon expérience précédente ...",
    "autonomie" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio similique omnis quos molestias, aliquid voluptatem.",
    "rigoureux" : "rigoureux description",
    "adaptabilite": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam exercitationem, optio non ab ullam consequatur.",
    "analytique" : "analytique descrip"
  };

  return (
    <>
      <div className="perks-container">
        <div className="perks-left-side">
        <ul>
            <li onClick={() => handleLiClick(adaptabilite)} className={activeTab === adaptabilite ? "perks-active-tab" : ""}>Adaptabilite.</li>
            <li onClick={() => handleLiClick(autonomie)} className={activeTab === autonomie ? "perks-active-tab" : ""}>Autonomie.</li>
            <li onClick={() => handleLiClick(analytique)} className={activeTab === analytique ? "perks-active-tab" : ""}>Analytique.</li>
            <li onClick={() => handleLiClick(curieux)} className={activeTab === curieux ? "perks-active-tab" : ""}>Curieux.</li> 
            <li onClick={() => handleLiClick(logique)} className={activeTab === logique ? "perks-active-tab" : ""}>Logique.</li>
            <li onClick={() => handleLiClick(management)} className={activeTab === management ? "perks-active-tab" : ""}>Management.</li>
            <li onClick={() => handleLiClick(rigoureux)} className={activeTab === rigoureux ? "perks-active-tab" : ""}>Rigoureux.</li>
            <li onClick={() => handleLiClick(teamwork)} className={activeTab === teamwork ? "perks-active-tab" : ""}>Teamwork.</li>
          </ul>
        </div>

        <div className="perks-right-side">
        {selectedImage ? (
              <div>
                <img src={selectedImage} alt="représentant la sélection" />
                <p>{imageTexts[selectedImage.split("/").pop().split(".")[0]]}</p>
              </div>
            ) : (
              <>
              <div><img src={vaultboy} alt="vaultboy pouce en l'air" /> </div>
              <p>Mes compétences (soft skill) !</p>
              </>
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