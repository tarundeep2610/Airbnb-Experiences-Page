import Airbnb_logo from './assets/airbnb 1.svg';
import './style.css';

export default function Navbar(){
    return (
        <nav>
            <img id="nav-logo" src={Airbnb_logo}></img>
        </nav>
    );
}