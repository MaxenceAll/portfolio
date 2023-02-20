
function CVscreen() {
    return ( <>



    <video autoPlay muted loop id="myVideo">
      <source src="../assets/CVassets/background.mp4" type="video/mp4" />
    </video>


    <div className="container">


            <div className="left_side">
                <div className="profileText">

                    <div className="imgBx">
                        <img src="../assets/CVassets/me.jpg" alt=""/>
                    </div>
                    <h2 className="nomprenom">
                        ALLART Maxence
                    </h2>
                </div>
                
                <hr/>
                
                <div className="contactInfo contacts">
                    <h3 className="title">Contact :</h3>
                    <ul className="contact">
                        <li>
                            <span className="icon"><i className="fa-solid fa-phone"></i></span>
                            <span className="text">+33 6 52 79 23 43</span>
                        </li>
                        <li>
                            <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                            <span className="textbig">maxence.allart@gmail.com</span>
                        </li>
                        <li>
                            <span className="icon"><i className="fa-brands fa-linkedin"></i></span>
                            <span className="textbig">linkedin.com/maxence-allart</span>
                        </li>
                        <li>
                            <span className="icon"><i className="fa-brands fa-github"></i></span>
                            <span className="textbig">github.com/MaxenceAll</span>
                        </li>
                        <li>
                            <span className="icon"><i className="fa-solid fa-globe"></i></span>
                            <span className="text">Site perso</span>
                        </li>
                        <li>
                            <span className="icon"><i className="fa-solid fa-house"></i></span>
                            <span className="text">Tourcoing, France</span>
                        </li>
                        <li>
                            <span className="icon"><i className="fa-solid fa-car"></i></span>
                            <span className="text">Permis + Véhicule</span>
                        </li>                    
                    </ul>
                </div>

                <hr/>

                <div className="contactInfo education">
                    <h3 className="title">Diplômes :</h3>
                    <ul>
                        <li>
                            <h5>2022 - 2023 ━━━━━━ </h5>
                            <h4>Concepteur Developpeur d'Application</h4>
                            <h4>A.F.P.A Roubaix.</h4>
                            <h2><i>Diplome Niveau +4</i></h2>
                        </li>
                        <li>
                            <h5>2006 - 2007 ━━━━━━ </h5>
                            <h4>Baccalauréat S.T.I.</h4>
                            <h2><i>Mention Assez Bien.</i></h2>
                        </li>
                    </ul>
                </div>

                <hr/>

                <div className="contactInfo langues">
                    <ul>
                        <li>
                            <span className="text"><img src="../assets/CVassets/france.png" alt="france flag"/>Français</span>                            
                            <span className="text-lang"><i>Langue maternelle</i></span>
                        </li>
                        <li>
                            <span className="text"><img src="../assets/CVassets/english.png" alt="france flag"/>English</span>
                            <span className="text-lang"><i>Lu, parlé, écrit.</i></span>
                        </li>
                        <li>
                            <span className="text"><img src="../assets/CVassets/france.png" alt="france flag"/>Espagnol</span>
                            <span className="text-lang"><i>Notions</i></span>
                        </li>
                                                            
                    </ul>
                </div>



            </div>
                

            <div className="right_side">

                <div className="about">
                    <h2 className="title2"><u>CONCEPTEUR DEVELOPPEUR D'APPLICATION</u></h2>
                    <p className="textProfile">
                        Je prépare en ce moment un diplôme de Concepteur Développeur d'Application jusqu'au mois de Septembre 2023.
                        Le développement informatique et la programmation ont toujours été une passion pour moi, passion confirmée depuis ma première année post-BAC via une première année en BTS (IRIS).
                        Je suis donc à la recherche d'un stage pour la période suivante : mi-juin/mi-septembre afin d'appliquer toutes les compétences développées depuis le début de ma formation.
                        Principalement pour du développement Back-end mais également du développement d'application mobile/web avec base de donnée complète.
                    </p>
                </div>
                <div className="about">
                    <h2 className="title2"><u>Expérience</u></h2>

                    <div className="box">
                        <div className="year_company">
                            <h5>2022 - 2023</h5>
                            <h5>A.F.P.A. Roubaix</h5>
                            <img src="../assets/CVassets/afpa.png" alt="logo sitel"/>
                        </div>
                        <div className="textExp">
                            <h4>Concepteur Developpeur d'Application</h4>
                            <p>Concevoir et développer : </p>
                            <p>• des composants d'interface utilisateur en intégrant les recommandations de sécurité.</p>
                            <p>• la persistance des données en intégrant les recommandations de sécurité.</p>
                            <p>• une application multicouche répartie en intégrant les recommandations de sécurité.</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="year_company">
                            <h5>2012 - 2022</h5>
                            <h5>Acticall Sitel</h5>
                            <img src="../assets/CVassets/sitel.webp" alt="logo sitel"/>
                        </div>
                        <div className="textExp">
                            <h4>Téléconseiller</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Perspiciatis quam perferendis recusandae iusto necessitatibus
                                tempore non quidem assumenda. Quod, culpa!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="about langages">
                    <h2 className="title2"><u>Langages</u></h2>
                    <ul>
                        <li><i className="devicon-html5-plain-wordmark colored"></i></li>
                        <li><i className="devicon-css3-plain-wordmark colored"></i></li>
                        <li><i className="devicon-sass-original colored"></i></li>
                        <li><i className="devicon-javascript-plain colored"></i></li>
                        <li><i className="devicon-nodejs-plain-wordmark colored"></i></li>
                        <li><i className="devicon-react-original-wordmark colored"></i></li>
                        <li><i className="devicon-java-plain-wordmark colored"></i></li>
                        <li><i className="devicon-csharp-plain-wordmark colored"></i></li>
                        <li><i className="devicon-sass-original colored"></i></li>
                        <li><i className="devicon-mysql-plain-wordmark colored"></i></li>
                        <li><i className="devicon-postgresql-plain-wordmark colored"></i></li>
                        <li><i className="devicon-bootstrap-plain-wordmark colored"></i></li>
                        <li><i className="devicon-dotnetcore-plain colored"></i></li>
                        <li><i className="devicon-trello-plain-wordmark colored"></i></li>
                        <li><i className="devicon-c-plain-wordmark colored"></i></li>
                    </ul>
                </div>


                <div className="about interest">
                    <h2 className="title2"><u>Loisirs</u></h2>
                    <ul>
                        <li><i className="fa fa-solid fa-gamepad"></i>   Esport</li>
                        <li><i className="fa fa-solid fa-dice-d20"></i>   Roleplay</li>
                        <li><i className="fa fa-solid fa-chess-knight"></i>   Chess</li>
                        <li><i className="fa fa-solid fa-computer"></i>   Hardware</li>
                    </ul>
                </div>


            </div>

    </div>







    
    </> );
}

export default CVscreen;