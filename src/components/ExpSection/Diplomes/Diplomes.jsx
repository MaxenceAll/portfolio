import { useState } from "react";

import "./Diplomes.css";

import eic from "../../../assets/Diplomes/EIC.png";
import iris from "../../../assets/Diplomes/JeanRostand.png";
import cda from "../../../assets/Diplomes/afpa.png";

import vaultdiploma from "../../../assets/Diplomes/vaultdiploma.webp"


function Diplomes() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const handleLiClick = (image) => {
    setSelectedImage(image);
    setActiveTab(image);
  };

  const imageTexts = {
    "eic":  "Baccalauréat sciences et technologies industrielles en génie électrotechnique - obtenu avec mention Assez-Bien.",
    "iris": "BTS Informatique et Réseaux pour l'Industrie et les Services Techniques, première année validée avec succès, malheureusement, il n'aura pas été possible pour moi de finir ce cursus de 2 ans.",
    "cda":  "Certification a passer le XXX"

  };

  return (
    <>
      <div className="diplomes-container">
        <div className="diplomes-left-side">
          <ul>
              <li onClick={() => handleLiClick(cda)} className={activeTab === cda ? "diplomes-active-tab" : ""}>Formation CDA <span className="diplomesValue"> ✔ 2022-2023</span></li> 
              <li onClick={() => handleLiClick(iris)} className={activeTab === iris ? "diplomes-active-tab" : ""}>BTS I.R.I.S. <span className="diplomesValue">2007-2008</span></li> 
              <li onClick={() => handleLiClick(eic)} className={activeTab === eic ? "diplomes-active-tab" : ""}>BAC S.T.I. <span className="diplomesValue">✔ 2006-2007</span></li> 
          </ul>
        </div>

        <div className="diplomes-right-side">
          {selectedImage ? (
            <>
              <img src={selectedImage} alt="représentant la sélection" />
              <p>{imageTexts[selectedImage.split("/").pop().split(".")[0]]}</p>
            </>
          ) : (
            <>
            <div> <img src={vaultdiploma} alt="vaultboy avec tenue universitaire" /> </div>
            <p> Ici mes diplômes.</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Diplomes;
