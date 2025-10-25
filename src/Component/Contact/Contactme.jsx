import { Fragment, useEffect } from "react";
import stylecon from './Contactme.module.css';
function Contact(){
    

return (

<Fragment>
<h2 className={`${stylecon.h2con} text-center p-5`}>CONTACT ME</h2>


<form className="p-5">
  <div className={`mb-3 `}>
    <input type="text" className= {`${stylecon.name} w-75 p-3 border-0 border-bottom`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name"></input>
  </div>



  <div className="mb-3">
    <input type="email" className="w-75 p-3 border-0 border-bottom" id="exampleInputPassword1" placeholder="Email Addrease"></input>
  </div>
  <div className="mb-3">
    <input type="text" className="w-75 p-3 border-0 border-bottom" id="exampleInputPassword1" placeholder="Phone Number"></input>
  </div>




<div className="form-floating p-2">
  <textarea className="border-0 border-bottom w-75 p-3" placeholder="Message" id="floatingTextarea"></textarea>
</div>
  
<button type="button" className="btn btn-success p-4">Send</button>
</form>





</Fragment>
)


}
export default Contact;