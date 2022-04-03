import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import Image from 'next/image'

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 "
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "custom-bg-yellow "
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Sign In
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "custom-bg-yellow"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Sign Up
              </a>
            </li>
    
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AuthPopBox = (props) => {
  // dropdown props
  const [openTab, setOpenTab] = React.useState(1);
  const [signupUsername, setSignupUsername] = React.useState("");
  const [signupEmail, setSignupEmail] = React.useState("");
  const [signupPasswordFirst, setSignupPasswordFirst] = React.useState("");
  const [signupPasswordSec, setSignupPasswordSec] = React.useState("");
  const [signinEmail, setSigninEmail] = React.useState("");
  const [signinPassword, setSigninPassword] = React.useState("");


  return (

    <>

    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full custom-bg-offwhite outline-none focus:outline-none">
          {/*header*/}
          <div className="w-full border-b border-solid border-blueGray-200 rounded-t">
           <div>
           <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px last:mr-0 flex-auto text-right">
              <a
                className={
                  "text-xs pl-2 font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "custom-bg-yellow "
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <span className="mr-3">Sign In</span>
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-left">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "custom-bg-yellow"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <span className="ml-3">Sign Up</span>
              </a>
              
            </li>
            <li className="-mb-px mr-2 last:mr-0 text-center">
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => props.showLoginProp(false)}
            >
              <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>     
              
            </li>
    
          </ul>
          
          
           </div>
            
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
          <div className={openTab === 1 ? "block" : "hidden"} id="link1">
            {/* Login Form */}
            <p className="custom-txt-title">Enter your email and password below:</p>
            <p className="custom-txt-normal">To continue logging into the account</p>
            <form>
                  <div className="relative w-full mb-3 mt-5">
                  
                  
                    <input
                      type="email"
                      className="border-2 custom-rounded-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all custom-bg-white"
                      placeholder="Email"
                      onChange={(e)=>setSigninEmail(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    
                    <input
                      type="password"
                      className="border-2 custom-rounded-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 custom-bg-white"
                      placeholder="Password"
                      onChange={(e)=>setSigninPassword(e.target.value)}
                    />
                  </div>
                 
                  <p className="custom-txt-sml">By Signing in you agree to our <a href="#" className="custom-a-blue">Terms & Conditions.</a></p>
                  <div className="text-center mt-6">
                    <button
                      className="custom-bg-lightblue custom-rounded-20 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={()=>console.log(signinEmail, signinPassword)}
                    >
                      LOGIN
                    </button>
                  </div>
                  
                </form>
          </div>
          <div className={openTab === 2 ? "block" : "hidden"} id="link2">
             {/* Login Form */}
             <p className="custom-txt-title">Enter your email and password below:</p>
            <p className="custom-txt-normal">OWN . Transfer . Verify</p>
            <form>
            <div className="relative w-full mb-3 mt-5">
                  
                  
                  <input
                    type="text"
                    className="border-2 custom-rounded-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all custom-bg-white"
                    placeholder="Username - Must be Unique"
                    onChange={(e)=>setSignupUsername(e.target.value)}
                  />
                </div>
                  <div className="relative w-full mb-3 mt-5">
                  
                  
                    <input
                      type="email"
                      className="border-2 custom-rounded-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all custom-bg-white"
                      placeholder="Email"
                      onChange={(e)=>setSignupEmail(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    
                    <input
                      type="password"
                      className="border-2 custom-rounded-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 custom-bg-white"
                      placeholder="Password"
                      onChange={(e)=>setSignupPasswordFirst(e.target.value)}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    
                    <input
                      type="password"
                      className="border-2 custom-rounded-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 custom-bg-white"
                      placeholder="Re-enter Password"
                      onChange={(e)=>setSignupPasswordSec(e.target.value)}
                    />
                  </div>
                 
                  <p className="custom-txt-sml">By Signing in you agree to our <a href="#" className="custom-a-blue">Terms & Conditions.</a></p>
                  <div className="text-center mt-6">
                    <button
                      className="custom-bg-lightblue custom-rounded-20 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={()=>console.log(signupEmail, signupUsername, signupPasswordFirst, signupPasswordSec)}
                    >
                      CREATE ACCOUNT
                    </button>
                  </div>
                  
                </form>
                </div>
          
          </div>

         
              
         
                
              
            
          {/*footer*/}
          <div className="p-6 flex-auto -mt-10">
          <p className="custom-txt-sml text-center">Not registered account yet? <a href="#" className="custom-a-blue">Sign Up NOW!.</a></p>
             
         
          <button className="mt-1 custom-bg-lightblue custom-rounded-20 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
         
         
            <span>REGISTER USING GOOGLE</span>
          </button>
      
          
         
                   
             
                     
              
                  </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>

  );
};
// const AuthPopBox = (props) => {
//   // dropdown props
//   const [openTab, setOpenTab] = React.useState(1);
//   return (

//     <>

//     <div
//       className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//     >
//       <div className="relative w-auto my-6 mx-auto max-w-3xl">
//         {/*content*/}
//         <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full custom-bg-offwhite outline-none focus:outline-none">
//           {/*header*/}
//           <div className="flex border-b border-solid border-blueGray-200 rounded-t">
//            <div></div>
//             <button
//               className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//               onClick={() => props.showLoginProp(false)}
//             >
//               <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
//                 ×
//               </span>
//             </button>
//           </div>
//           {/*body*/}
//           <div className="relative p-6 flex-auto">
//             {/* Login Form */}
//             <p className="custom-txt-title">Enter your email and password below:</p>
//             <p className="custom-txt-normal">To continue logging into the account</p>
//             <form>
//                   <div className="relative w-full mb-3 mt-5">
                  
                  
//                     <input
//                       type="email"
//                       className="border-2 custom-rounded-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all custom-bg-white"
//                       placeholder="Email"
//                     />
//                   </div>

//                   <div className="relative w-full mb-3">
                    
//                     <input
//                       type="password"
//                       className="border-2 custom-rounded-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 custom-bg-white"
//                       placeholder="Password"
//                     />
//                   </div>
                 
//                   <p className="custom-txt-sml">By Signing in you agree to our <a href="#" className="custom-a-blue">Terms & Conditions.</a></p>
//                   <div className="text-center mt-6">
//                     <button
//                       className="custom-bg-lightblue custom-rounded-20 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150"
//                       type="button"
//                     >
//                       LOGIN
//                     </button>
//                   </div>
                  
//                 </form>
//           </div>
          
//           {/*footer*/}
//           <div className="p-6 flex-auto -mt-10">
//           <p className="custom-txt-sml text-center">Not registered account yet? <a href="#" className="custom-a-blue">Sign Up NOW!.</a></p>
             
         
//           <button className="mt-1 custom-bg-lightblue custom-rounded-20 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
         
         
//             <span>LOGIN USING GOOGLE</span>
//           </button>
      
          
         
                   
             
                     
              
//                   </div>
//         </div>
//       </div>
//     </div>
//     <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//   </>

//   );
// };



export default AuthPopBox;
