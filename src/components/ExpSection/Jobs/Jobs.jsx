import { useState } from "react";

import "./Jobs.css";

import sitel from "../../../assets/Jobs/sitel.webp";

import vaultboy from "../../../assets/Jobs/vaultboypouce.png"
import ContactCV from "../../ContactCV/ContactCV";


function Jobs() {
  const [selectedImage, setSelectedImage] = useState(null);

  const [activeTab, setActiveTab] = useState(null);

  const handleLiClick = (image) => {
    setSelectedImage(image);
    setActiveTab(image);
  };

  const imageTexts = {
    sitel: "10ans chez Sitel/Acticall avec pour client PMU, j'ai pu voir/pratiquer tous les aspects de ce métier; du téléconseiller au téléphone/réseaux sociaux, à la gestion des flux/chiffres en tant que 'real-time analyst' ou encore dans le management en tant que superviseur et enfin j'ai même pu y animer des formations."
  };

  return (
    <>
      <div className="jobs-container">
        <div className="jobs-left-side">
        <ul>
            <li onClick={() => handleLiClick(sitel)} className={activeTab === sitel ? "jobs-active-tab" : ""}>Sitel <span className="jobsValue">+10 ans</span></li> 
          </ul>
        </div>

        <div className="jobs-right-side">
          {selectedImage ? (
            <>
              <img src={selectedImage} alt="représentant la sélection" />
              <p>{imageTexts[selectedImage.split("/").pop().split(".")[0]]}</p>
            </>
          ) : (
            <>
            <div> <img src={vaultboy} alt="vaultboy pouce levé" /> </div>
            <p>Bientôt votre entreprise dans la liste.</p>
            </>
          )}
        </div>

      </div>
      <div className="jobs-right-side--contact">
        <ContactCV/>
      </div>
    </>
  );
}

export default Jobs;
