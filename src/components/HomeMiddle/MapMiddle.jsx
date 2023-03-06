import './MapMiddle.css';
import MapNord from "../../assets/nord.png";
import ContactCV from '../ContactCV/ContactCV';


function MapMiddle() {

    return ( <>
    
        <div className='MapNord-container'>
            <img src={MapNord} alt="carte du nord" />

            <div>
                Disponible sur toute la région Nord.
            </div>

            <div>
                <ContactCV/>
            </div>
        </div>
    
    </>);
}

export default MapMiddle;