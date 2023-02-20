import { useState } from 'react';
import "./Special.css";

function Special() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLiClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="special-container">
        <div className="special-left-side">
          <ul>
            <i>
              <li onClick={() => handleLiClick('../../../assets/SPECIAL/strength.gif')}>
                Strength
              </li>
              <li onClick={() => handleLiClick('../../../assets/vaultboy.gif')}>
                Perception
              </li>
              <li onClick={() => handleLiClick('../../../assets/SPECIAL/endurance.jpg')}>
                Endurance
              </li>
              <li onClick={() => handleLiClick('../../../assets/SPECIAL/charisma.jpg')}>
                Charisma
              </li>
              <li onClick={() => handleLiClick('../../../assets/SPECIAL/intelligence.jpg')}>
                Intelligence
              </li>
              <li onClick={() => handleLiClick('../../../assets/SPECIAL/agility.gif')}>
                Agility
              </li>
              <li onClick={() => handleLiClick('../../../assets/SPECIAL/luck.jpg')}>
                Luck
              </li>
            </i>
          </ul>

          toto : <img src="../../../assets/vaultboy.gif" alt=""/>
        </div>



        <div className="special-right-side">
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" />
          ) : (
            <div>Click to show !</div>
          )}
        </div>


      </div>
    </>
  );
}

export default Special;
