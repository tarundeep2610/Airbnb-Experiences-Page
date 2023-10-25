import Hero_Img from './assets/Hero Image.png';
import './style.css';

export default function HeroSection(){
    return (
        <section className='hero-section'>
            <div className='hero-img-container'>
                <img src={Hero_Img} id='hero-img'></img>
            </div>
            <div id='exp-text'>
                <h1>Online Experiences</h1>
                <h4> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h4>    
            </div>        
        </section>
    );
}