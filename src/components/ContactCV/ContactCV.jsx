import { NavLink } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import './ContactCV.css'

function ContactCV() {

  function handleClick() {
    const fileName = 'CV-allart-Maxence-v4.pdf'; 
    const fileUrl = '../../assets/CV/'; 
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }

  return (
    <>
      <div className='ContactCV'>
        <div className="" onClick={handleClick}>
          <NavLink target="_blank" to="https://maxenceall.github.io/ProjectCV/" className="LienversCV">
            <p>ALLART Maxence : Concepteur Developpeur d'Application</p>
            <p>Télécharger CV :<FaDownload /></p>
          </NavLink>
        </div>
        <p className="mail-me" onClick={() => window.location.href = "mailto:maxence.allart@gmail.com?subject=A l'attention de ALLART Maxence"}>Contact : maxence.allart@gmail.com  <HiMail /></p>
      </div>
    </>
  );
}

export default ContactCV;
