// import React from "react";
// import "./register.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
// const Register = () => {
//     return (  

//         <>
//   <div className="form_wrapper">
//     <div className="form_container">
//       <div className="title_container">
//         <h2>Responsive Registration Form</h2>
//       </div>
//       <div className="row clearfix">
//         <div className="">
//           <form>
//             <div className="input_field">
//               {" "}
//               <span>
//                 <i aria-hidden="true" className="fa fa-envelope" />
//               </span>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 required
//               />
//             </div>
//             <div className="input_field">
//               {" "}
//               <span>
//                 <i aria-hidden="true" className="fa fa-lock" />
//               </span>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//               />
//             </div>
//             <div className="input_field">
//               {" "}
//               <span>
//                 <i aria-hidden="true" className="fa fa-lock" />
//               </span>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Re-type Password"
//                 required
//               />
//             </div>
//             <div className="row clearfix">
//               <div className="col_half">
//                 <div className="input_field">
//                   {" "}
//                   <span>
//                     <i aria-hidden="true" className="fa fa-user" />
//                   </span>
//                   <input type="text" name="name" placeholder="First Name" required/>
//                 </div>
//               </div>
//               <div className="col_half">
//                 <div className="input_field">
//                   {" "}
//                   <span>
//                     <i aria-hidden="true" className="fa fa-user" />
//                   </span>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Last Name"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="input_field radio_option" required>
//               <input type="radio" name="radiogroup1" id="rd1" />
//               <label htmlFor="rd1">Male</label>
//               <input type="radio" name="radiogroup1" id="rd2" />
//               <label htmlFor="rd2">Female</label>
//             </div>
//             <div className="input_field select_option" required>
//               <select>
//                 <option>Select a country</option>
//                 <option>Option 1</option>
//                 <option>Option 2</option>
//               </select>
//               <div className="select_arrow" />
//             </div>
//             <div className="input_field checkbox_option">
//               <input type="checkbox" id="cb1" />
//               <label htmlFor="cb1">I agree with terms and conditions</label>
//             </div>
//             <input className="button" type="submit" defaultValue="Register" />
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>

// </>

//     );
// }
 
// export default Register;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "./register.css";

const Register = () => {
  return (
    <>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Responsive Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form>
                <div className="input_field">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input type="password" name="password" placeholder="Password" required />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input type="password" name="password" placeholder="Re-type Password" required />
                </div>
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field">
                      {" "}
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <input type="text" name="name" placeholder="First Name" required />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field">
                      {" "}
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <input type="text" name="name" placeholder="Last Name" required />
                    </div>
                  </div>
                </div>
                {/* ... radio and select fields ... */}
                <div className="input_field checkbox_option">
                  <input type="checkbox" id="cb1" />
                  <label htmlFor="cb1">I agree with terms and conditions</label>
                </div>
                <input className="button" type="submit" defaultValue="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
