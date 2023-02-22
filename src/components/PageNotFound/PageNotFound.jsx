import './PageNotFound.css'

import vaultboyrage from '../../assets/NotFound/vaultboyrage.webp'

function PageNotFound() {
    return ( <>

        <div className='notfound-container'>
            <img src={vaultboyrage} alt="Vault boy enragé !"  />
            404 NOT FOUND
        </div>

    </> );
}

export default PageNotFound;