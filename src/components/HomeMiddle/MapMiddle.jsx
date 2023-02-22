import './MapMiddle.css';
import MapNord from "../../assets/nord.gif";
import ContactCV from '../ContactCV/ContactCV';


function MapMiddle() {

    return ( <>
    
        <div className='MapNord-container'>
            <img src={MapNord} alt="carte du nord" />

            <div>
                Disponible sur toute la région Nord.
            </div>

            <ContactCV/>

        </div>
    
    </>);
}

export default MapMiddle;