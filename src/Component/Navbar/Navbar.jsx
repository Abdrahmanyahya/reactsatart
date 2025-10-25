import style from './Navbar.module.css';
function Navbar(){
    return (

<div className={`${style.backgroundnav} d-flex justify-content-between p-4 fixed-top`}>
    <a href="#" className={`${style.STARTfont} text-decoration-none text-white ms-4`}>START BOOTSTRAP</a>
    <ul className={`${style.nav} me-5 mt-2`}>
        <li><a href="#" className={'text-decoration-none text-white'}>PORTFOLIO</a></li>
        <li><a href="#" className={'text-decoration-none text-white'}>ABOUT</a></li>
        <li><a href="#" className={'text-decoration-none text-white'}>CONTACT</a></li>
    </ul>
</div>


    )
}
export default Navbar;