import { NavLink } from "react-router-dom";
import "./AboutContent.css";

function AboutContent() {
  return (
    <>
      <div className="aboutcontent-container">
        <div>
          Bonjour et bienvenue sur mon portfolio ! Je suis ALLART Maxence,
          actuellement en formation pour préparer le titre "Concepteur
          développer d'application", titre reconnu par l'état, bac+4.
        </div>

        <br />
        <div>
          Je suis en pleine reconversion professionnelle, passionné
          d'informatique depuis toujours, cette formation me permet de revenir
          dans mon domaine de predilection !
        </div>

        <ul>
          Cette formation me prépare, entre autre, à la conception et au
          développement :
          <li>
            - Des composants d'interface utilisateur en intégrant les
            recommandations de sécurité.
          </li>
          <li>
            - La persistance des données en intégrant les recommandations de
            sécurité.
          </li>
          <li>
            - Une application multicouche répartie en intégrant les
            recommandations de sécurité.
          </li>
        </ul>

        <br />

        <div>
          Pour la petite histoire, je cherchais un moyen original et amusant de
          présenter mon site perso. Etant passionné de jeux vidéo, j'ai pensé au
          PIP-BOY de l'univers du jeu vidéo FALLOUT© . Dans le jeu video, il
          s'agit d'un petit ordinateur portable qui regroupe les données
          personnelles du joueur, cela me semble bien approprié ☺. Vous verrez
          donc ici des informations me concernant !
        </div>

        <br />

        <div>
          Petite précision, ce site a était effectué avec REACT, il était à la
          base un endroit où j'expérimentais les choses apprises sur ce langage.
          Enfin, il s'agit que d'une première version et le site sera refait
          entièrement lorsque ma maitrise de React augmentera.
        </div>
        <div>
          Je vous souhaite bonne navigation, n'hésitez pas à me contacter.
        </div>

        {/* <div>
                Ps: comme dans le jeu video, il est possible d'écouter la radio ! Ici un petit bouton en bas à droite permet d'écouter cette radio. (en cours d'amélioration).
              </div> */}

        <NavLink to="/stat/status">
          <div className="letsgo-about">&gt;&gt; Let's go ! &lt;&lt;</div>
        </NavLink>
      </div>
    </>
  );
}

export default AboutContent;
