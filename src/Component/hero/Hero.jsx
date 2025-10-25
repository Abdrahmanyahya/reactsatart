import styleHero from './Hero.module.css';
import { Fragment } from "react";
import imghero from './../../assets/avataaars.svg';
function Hero(){




    return (
        <Fragment>
<div className={styleHero.Hero}></div>
<div className='position-relative'>
    <img src={imghero} className='position-absolute mt-4'></img>
    <h1 className='position-absolute'>START BOOTSTRAP</h1>
    <p className='position-absolute '>Graphic Artist - Web Designer - Illustrator</p>
          
</div>

        </Fragment>
    )
}

export default Hero;