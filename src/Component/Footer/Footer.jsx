import { Fragment } from "react"
import stylefoo from './footer.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer(){

    return(

        <Fragment>
         <div className={`${stylefoo.footback}  row `}>
            <div className="col-md-4 ">
                <div className="d-flex flex-column gap-3">

                
                <h3 className="text-white">LOCATION</h3>
                <span className="text-white">2215 John Daniel Drive<br></br>Clark, MO 65243</span>
            </div>
</div>
            <div className="col-md-4">
                <div className="d-flex flex-column gap-4">

                
                <h3 className="text-white ">AROUND THE WEB</h3>
                <div className="d-flex gap-3">
                    <button type="button" class={`${stylefoo.btnFoot} btn btn-outline-light p-3`}><i class="fa-brands fa-facebook-f "></i></button>
                  <button type="button" class={`${stylefoo.btnFoot} btn btn-outline-light p-3`}><i class="fa-solid fa-dove"></i></button>
                <button type="button" class={`${stylefoo.btnFoot} btn btn-outline-light p-3`}><i class="fa-brands fa-linkedin-in"></i></button>
                <button type="button" class={`${stylefoo.btnFoot} btn btn-outline-light p-3`}><i class="fa-solid fa-bowling-ball"></i></button>
</div>


                </div>
            </div>
            <div className="col-md-4">
                <div className="d-flex flex-column gap-3">
    <h3 className="text-white">ABOUT FREELANCER</h3>
    <div>
    <span className="text-white">Freelance is a free to use, MIT licensed<br></br></span>
    <span className="text-white">Bootstrap theme created by </span>
    <span className={`${stylefoo.spancolor} text-decoration-underline`}>Start Bootstrap.</span>
</div>
</div>
</div>
         </div>

<div className={`${stylefoo.divcopy} p-3 mb-5`}>
    <span className={`${stylefoo.spancoppy} `}>Copyright © Your Website 2023</span>
</div>


        </Fragment>
    )
}

export default Footer;