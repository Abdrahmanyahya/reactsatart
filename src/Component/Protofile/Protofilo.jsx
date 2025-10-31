import { Fragment } from "react";
import styleproto from './Protofilo.module.css';
import imgcbin from './../../assets/cabin.png';
import imgcake from './../../assets/cake.png';
import imgcircus from './../../assets/circus.png';
import imggame from './../../assets/game.png';
import imgsafe from './../../assets/safe.png';
import imgsubmarine from './../../assets/submarine.png';

function Proto(){


    return (
<Fragment>
    <h2 className={`${styleproto.h2claa} text-center mt-5`} >PROTOFOLIO</h2>
    <div className="mb-5">
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <img src={imgcbin}></img>
                </div>
                <div className="col-md-4 mb-3">
                    <img src={imgcake}></img>
                </div>
                <div className="col-md-4 mb-3">
                    <img src={imgcircus}></img>
                </div>

                <div className="col-md-4 mt-3">
                    <img src={imggame}></img>
                </div>
                <div className="col-md-4 mt-3">
                    <img src={imgsafe}></img>
                </div>
                <div className="col-md-4 mt-3">
                    <img src={imgsubmarine}></img>
                </div>
                
            </div>
        </div>
    </div>
</Fragment>
    )
}
export default Proto;