import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./DataMiddle.css";

import pipboy from "../../assets/Data/pipboy.webp";
import todo from "../../assets/Data/todo.webp";
import blogvoyage from "../../assets/Data/blogvoyage.webp";
import caisseauto from "../../assets/Data/caisseauto.webp";
import calculcsharp from "../../assets/Data/calculcsharp.png";
import tictactoecsharp from "../../assets/Data/tictactoecsharp.webp";
import convertissor from "../../assets/Data/convertissor.png";
import drapeaux from "../../assets/Data/drapeaux.png";


import vaultboy from "../../assets/Data/vaultboycoding.webp";

function DataMiddle() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const handleLiClick = (image) => {
    setSelectedImage(image);
    setActiveTab(image);
  };

  const projectLinks = {
    pipboy: "https://github.com/MaxenceAll/portfolio",
    todo: "https://github.com/MaxenceAll/first_app",
    drapeaux: "https://github.com/MaxenceAll/project-drapeaux",
    blogvoyage: "https://github.com/MaxenceAll/TPMVVM_max",
    caisseauto: "https://github.com/MaxenceAll/Caisseauto",
    calculcsharp: "https://github.com/MaxenceAll/b_Calculatrice",
    tictactoecsharp: "https://github.com/MaxenceAll/e_TicTacToe",
    convertissor: "https://github.com/MaxenceAll/g_Convertissor",
  };

  const imageTexts = {
    pipboy:"Vous êtes actuellement dessus, c'est mon second projet REACT, a servi de base d'apprentissage. Fait en REACT.js + HTML + CSS.",
    todo: "Première appli REACT complète (API reste en NODE.JS et React pour le front.",
    drapeaux: "Petit projet pour apprendre a afficher des données issues d'un API + découverte des routes. Ce projet permet de filtrer et afficher tous les pays du monde !(REACT)",
    blogvoyage: "Second projet pour appréhender le javascript (apprentissage NODE.JS) en MVVM.",
    caisseauto: "Premier projet pour appréhender le javascript, il s'agit d'une caisse enregistreuse qui rend la monnaie (+ visuel).",
    calculcsharp: "L'un des premiers projets effectués afin d'apprendre les bases en c#",
    tictactoecsharp: "L'un des premiers projets effectués afin d'apprendre les bases en c#",
    convertissor: "L'un des premiers projets effectués afin d'apprendre les bases en c#",
  };

  return (
    <>
      <div className="data-container">
        <div className="data-left-side">
          <ul>

            <li
              onClick={() => handleLiClick(pipboy)}
              className={activeTab === pipboy ? "data-active-tab" : ""}
            >
              Projet PIP-boy
            </li>

            <li
              onClick={() => handleLiClick(todo)}
              className={activeTab === todo ? "data-active-tab" : ""}
            >
              Projet ToDo
            </li>

            <li
              onClick={() => handleLiClick(drapeaux)}
              className={activeTab === drapeaux ? "data-active-tab" : ""}
            >
              Projet Drapeaux
            </li>

            <li
              onClick={() => handleLiClick(blogvoyage)}
              className={activeTab === blogvoyage ? "data-active-tab" : ""}
            >
              Projet Blog Voyage
            </li>

            <li
              onClick={() => handleLiClick(caisseauto)}
              className={activeTab === caisseauto ? "data-active-tab" : ""}
            >
              Projet Caisse auto 3000
            </li>

            
            <li
              onClick={() => handleLiClick(calculcsharp)}
              className={activeTab === calculcsharp ? "data-active-tab" : ""}
            >
              Calculatrice en c#
            </li>

            <li
              onClick={() => handleLiClick(tictactoecsharp)}
              className={activeTab === tictactoecsharp ? "data-active-tab" : ""}
            >
              Tic-Tac-Toe en c#
            </li>

            <li
              onClick={() => handleLiClick(convertissor)}
              className={activeTab === convertissor ? "data-active-tab" : ""}
            >
              Convertisseur
            </li>






          </ul>
        </div>

        <div className="data-right-side">
          {selectedImage ? (
            <>
              <img src={selectedImage} alt="représentant la sélection" />
              <p>{imageTexts[selectedImage.split("/").pop().split(".")[0]]}</p>
              <p>
                Lien vers la source de ce projet :{" "}
                <a
                  href={
                    projectLinks[selectedImage.split("/").pop().split(".")[0]]
                  }
                >
                  <FaGithub />
                </a>
              </p>
            </>
          ) : (
            <>
              <div className="vaultboycoding">
                {" "}
                <img src={vaultboy} alt="vaultboy codant" />{" "}
              </div>
              <p> Mes différents projets !</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default DataMiddle;
