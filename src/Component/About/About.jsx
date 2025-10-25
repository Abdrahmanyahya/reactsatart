import { Fragment } from "react";
import styleabout from './About.module.css';
function About(){



    return (
<Fragment >

<div className={`${styleabout.about} p-5 `}>

<h2 className={`${styleabout.h2about} text-center text-white mt-5`}>ABOUT</h2>

<div className=" ">
    <div className="contanier p-5">
        <div className="row justify-content-center ">
            <div className="col-md-4">
                <p className={`${styleabout.pabout} text-white `}>Freelancer is a free bootstrap theme<br></br> created by Start Bootstrap. The<br></br> download includes the complete source,<br></br> files including HTML, CSS, and <br></br> JavaScript as well as optional SASS<br></br> stylesheets for easy customization.</p>
            </div>
            <div className= "col-md-4 ">
            <p className={`${styleabout.pabout} text-white`}>You can create your own custom avatar<br></br> for the masthead, change the icon in the<br></br> dividers, and add your email address to<br></br> the contact form to make it fully<br></br> functional!</p>
            </div>
        </div>
    </div>
    <button type="button" className={`${styleabout.btn} btn btn-outline-light p-3 `}><a href="https://startbootstrap.com/previews/freelancer" className={`${styleabout.abtn} text-decoration-none`} >Free Dowenlode!</a></button>

</div>

</div>


</Fragment>
    )
}
export default About;