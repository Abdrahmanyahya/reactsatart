import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
function Navbar(){
    return (

<div className={`${style.backgroundnav} d-flex justify-content-between p-4 fixed-top`}>
    <a href="#" className={`${style.STARTfont} text-decoration-none text-white ms-4`}>START BOOTSTRAP</a>
    <ul className={`${style.nav} me-5 mt-2`}>
       <li><Link to={'/'} className={'text-decoration-none text-white'}>HOME</Link></li>

        <li><Link to={'proto'} className={'text-decoration-none text-white'}>PORTFOLIO</Link></li>
        <li><Link to={'about'}className={'text-decoration-none text-white'}>ABOUT</Link></li>
        <li><Link to={'contact'} className={'text-decoration-none text-white'}>CONTACT</Link></li>
    </ul>
</div>


    )
}
export default Navbar;