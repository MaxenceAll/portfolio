import { useState } from "react";
import "./Special.css";

import strength from "../../../assets/SPECIAL/strength.gif";
import perception from "../../../assets/SPECIAL/perception.gif";
import endurance from "../../../assets/SPECIAL/endurance.gif";
import charisma from "../../../assets/SPECIAL/charisma.gif";
import intelligence from "../../../assets/SPECIAL/intelligence.gif";
import agility from "../../../assets/SPECIAL/agility.gif";
import luck from "../../../assets/SPECIAL/luck.gif";

function Special() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLiClick = (image) => {
    setSelectedImage(image);
  };

  const imageTexts = {
    strength: "A force de COPIER/COLLER, l'index et l'orriculaire sont particulièrement musclés !.",
    perception: "Capable de débusquer les () ou les {} mal placés avant même de les taper !.",
    endurance: "10h de code par jour ? No problemo .... avec 10 redbull par heure.",
    charisma: "Lunettes geeks CHECK. Barbe geek CHECK. Chemise à carreaux geek CHECK.",
    intelligence: "Suffisamment intélligent pour demander à CHATgpt et relativement comprendre la réponse.",
    agility: "L'agilité ? C'est débrouissailler du code déprécié, explorer les nouveaux frameworks, avec rien d'autre que son fidèle IDEs dopé d'extensions. Et tout comme un survivaliste, toujours avoir un plan de secours (un dépôt GitHub).",
    luck: "Pas besoin de chance quand on trafique le Math.random().",
  };

  return (
    <>
      <div className="special-container">
        <div className="special-left-side">
          <ul>
            <li onClick={() => handleLiClick(strength)}>      Strength      <span className="specialValue">10</span></li> 
            <li onClick={() => handleLiClick(perception)}>    Perception    <span className="specialValue">10</span></li>
            <li onClick={() => handleLiClick(endurance)}>     Endurance     <span className="specialValue">10</span></li>
            <li onClick={() => handleLiClick(charisma)}>      Charisma      <span className="specialValue">10</span></li>
            <li onClick={() => handleLiClick(intelligence)}>  Intelligence  <span className="specialValue">10</span></li>
            <li onClick={() => handleLiClick(agility)}>       Agility       <span className="specialValue">10</span></li>
            <li onClick={() => handleLiClick(luck)}>          Luck          <span className="specialValue">10</span></li>
          </ul>
        </div>

        <div className="special-right-side">
          {selectedImage ? (
            <>
              <img src={selectedImage} alt="représentant la sélection" />
              {/* thanks chatgpt for : */}
              <p>{imageTexts[selectedImage.split("/").pop().split(".")[0]]}</p>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
  
export default Special;
