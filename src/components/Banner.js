import '../styles/banner.css';
import logo from '../assets/logo.png'

import Recommendation from './Recommendation';

function Banner() {
    const title = "La maison jungle"
    const currentMonth = new Date().getMonth()
    const isSpring = (currentMonth <= 2 ? "Ce n'est pas encore le printemps !" : (currentMonth >=6 ? "Ce n'est plus le printemps !" : "C'est le printemps !"))

    return (
        <div className='lmj-banner'>
            <div className='lmj-banner-row'>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </div>
            {isSpring}
            <Recommendation />
        </div>
    )
}

export default Banner