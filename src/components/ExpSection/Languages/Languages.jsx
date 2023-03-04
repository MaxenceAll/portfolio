import { useState } from "react";

import "./Languages.css";

import html from "../../../assets/Languages/html.svg";
import css from "../../../assets/Languages/css.svg";
import js from "../../../assets/Languages/js.svg";
import clang from "../../../assets/Languages/clang.svg";
import java from "../../../assets/Languages/java.svg";
import csharp from "../../../assets/Languages/csharp.svg";
import react from "../../../assets/Languages/react.svg";
import nodejs from "../../../assets/Languages/nodejs.svg";
import mysql from "../../../assets/Languages/mysql.svg";
import dotnetcore from "../../../assets/Languages/dotnetcore.svg";
import mongodb from "../../../assets/Languages/mongodb.svg";
import sql from "../../../assets/Languages/sql.svg";

import vaultboy from "../../../assets/Languages/vaultboy.png"


function Languages() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const handleLiClick = (image) => {
    setSelectedImage(image);
    setActiveTab(image);
  };

  const imageTexts = {
    html: "La base, langage obligatoire et connu depuis bien avant ma première année de BTS. ",
    css: "L'horreur pour le maitriser mais une fois qu'on le maitrise un minimum, tout est plus beau !",
    js: "Le début des pages web dynamique ! Il a bien changé depuis ma première découverte du langage en 2007... C'est sa force !",
    clang: "Mon premier language en BTS, le commencement d'une longue aventure ! Parfois on regrette l'époque où il n'y avait pas encore les objets, ou pas ...",
    java: "Mon premier language en Formation CDA, le REcommencement et REdécouverte des bases avec ce langage ! Enervant lorsqu'on rencontre des problèmes de type, mais plus tard on se rend compte que sa non-permissivité est bel et bien un avantage !",
    csharp:"Langage principal vu en Formation CDA pour la conception d'application desktop 'lourds' !",
    react:"Découverte de la bibliothèque REACT, qui pourrait se voir comme un framework mais qui n'en est pas un ;-).",
    nodejs:"Initiation aux API et au back-end via NODE.JS, simple et efficace, comme le java..javaSCRIPT.",
    mysql:"Ma première base de donnée relationnelle vu en formation, simple et gratuite, parfaite pour apprendre avant de s'attaquer aux autres ! Et aussi surtout pour apprendre le SQL.",
    dotnetcore: "Second language back-end découvert en formation !",
    mongodb: "Système de gestion de base de données NoSQL, y'a pas que le SQL dans la vie !",
    sql: "SELECT * connaissances FROM 2007"
  };

  return (
    <>
      <div className="lang-container">
        <div className="lang-left-side">
            <ul>
                <li onClick={() => handleLiClick(html)} className={activeTab === html ? "lang-active-tab" : ""}>-- HTML 5</li> 
                <li onClick={() => handleLiClick(css)} className={activeTab === css ? "lang-active-tab" : ""}>-- CSS 3</li> 
                <li onClick={() => handleLiClick(js)} className={activeTab === js ? "lang-active-tab" : ""}>-- JS 6</li> 
                <li onClick={() => handleLiClick(clang)} className={activeTab === clang ? "lang-active-tab" : ""}>-- C</li> 
                <li onClick={() => handleLiClick(csharp)} className={activeTab === csharp ? "lang-active-tab" : ""}>-- C#</li> 
                <li onClick={() => handleLiClick(react)} className={activeTab === react ? "lang-active-tab" : ""}>-- React.js</li> 
                <li onClick={() => handleLiClick(nodejs)} className={activeTab === nodejs ? "lang-active-tab" : ""}>-- Node.js</li> 
                <li onClick={() => handleLiClick(mysql)} className={activeTab === mysql ? "lang-active-tab" : ""}>-- mySQL</li> 
                <li onClick={() => handleLiClick(dotnetcore)} className={activeTab === dotnetcore ? "lang-active-tab" : ""}>-- .NET core</li> 
                <li onClick={() => handleLiClick(java)} className={activeTab === java ? "lang-active-tab" : ""}>-- Java</li> 
                <li onClick={() => handleLiClick(mongodb)} className={activeTab === mongodb ? "lang-active-tab" : ""}>-- MongoDB</li> 
                <li onClick={() => handleLiClick(sql)} className={activeTab === sql ? "lang-active-tab" : ""}>-- SQL</li> 
            </ul>
        </div>

        <div className="lang-right-side">
          {selectedImage ? (
            <>
              <img src={selectedImage} alt="représentant la sélection" />
              <p>{imageTexts[selectedImage.split("/").pop().split(".")[0]]}</p>
            </>
          ) : (
            <>
            <div className="vaultboycomputer"> <img src={vaultboy} alt="vaultboy derriere un ordinateur" /> </div>
            <p>Les langages connus.</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Languages;
