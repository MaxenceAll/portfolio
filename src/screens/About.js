import HomeFooter from "../components/HomeFooter/HomeFooter";
import HomeHeader from "../components/HomeHeader/HomeHeader";

import './About.css'
import ContactCV from "../components/ContactCV/ContactCV";

function Home() {

  return (
    
    <>
      <div className="scanbar"></div>
      <div className="noise"></div>

      <div className="container">
        <div className="ecran radial-gradient">

        <div className="ecran-header">
            <HomeHeader />   
          </div>

          <div className="About-content">
              <div>
                Bonjour et bienvenue sur mon portfolio !
                Je suis ALLART Maxence,
                actuellement en formation pour préparer le titre "Concepteur développer d'application",
                titre reconnu par l'état, bac+4.
              </div> 


              <div>
                Je suis en pleine reconversion professionnelle,
                passionné d'informatique depuis toujours,
                cette formation me permet de revenir dans mon domaine de predilection. 
              </div> 

              <ul>
              Cette formation me prépare, entre autre, à la conception et au développement :
                <li>
                  - Des composants d'interface utilisateur en intégrant les recommandations de sécurité.
                </li>              
                <li>
                  - La persistance des données en intégrant les recommandations de sécurité.
                </li>              
                <li>
                  - Une application multicouche répartie en intégrant les recommandations de sécurité.
                </li>              
              </ul>

              <div>
                Ce portfolio est conçu pour vous donner un petit aperçu de mes compétences et de mes réalisations,
                j'ai tenté de faire une présentation amusante et basée sur l'univers de Fallout, le jeu vidéo.
                Pour la petite histoire, le site est pensé comme le PIPBoy de Fallout,
                un petit ordinateur portable qui permet de consulter les informations concernant son personnage,
                ici vous verrez donc des informations me concernant !
              </div>

              <div>
                Pour information, il s'agit d'une première version, que j'ai développé avec REACT (j'expérimentais à la base les Routers React à partir de ce projet), en même temps que mon premier projet, ce n'est donc pour l'instant qu'une démo non définitive qui sera améliorée au fur et à mesure de mon perfectionnement en REACT.
                Je vous souhaite bonne navigation, n'hésitez pas à me contacter.
              </div>

              <div>
                Ps: comme dans le jeu video, il est possible d'écouter la radio ! Ici un petit bouton en bas à droite permet d'écouter cette radio. (en cours d'amélioration).
              </div>

            </div>

            <div className="ContactCV">
            <div className="">
              <HomeFooter />
            </div>
              <ContactCV/>
            </div>




        </div>

      </div>
    </>
  );
}

export default Home;
