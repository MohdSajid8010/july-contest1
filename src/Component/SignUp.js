import React, { useState,useEffect } from 'react'
import googleicon from "../images/google.png"
import facebookIcon from "../images/facebook.png"
import { FaEye,FaEyeSlash } from "react-icons/fa";



const SignUp = () => {
    const [formData, setFormData] = useState({ name: "", email: "", pass: "", cpass: "" });
    const [error, setError] = useState("")
    const [successMsg, setSuccessMsg] = useState("");
    const [toggleIcon1,setToggleIcon1]=useState(false);
    const [toggleIcon2,setToggleIcon2]=useState(false);
useEffect(()=>{
const metaTags=document.getElementsByTagName("meta");
  // Loop through all meta tags and update specific ones
  for(let metaT of metaTags)
  {
    let name=metaT.getAttribute("name");
    if(name==="description")
    {
        metaT.setAttribute("content","This is updated sign-up page")
    }
    if(name==="keyword")
    {
        metaT.setAttribute("content","3D Objects, Mockups, Ilustration,and many more...")
    }
    if(name==="author")
    {
        metaT.setAttribute("content","M-Sajid-Accio-Student")
    }
  }
       // update the title of document
  document.title="this is updated sign up form";
},[])

    function handleSubmit(e) {
        e.preventDefault();

        let error = {}
        //check name
        if (formData.name.trim() === "") {
            error.nameErr = "name is required!"
        }
        else if (!formData.name.trim().includes(" ")) {
            error.nameErr = "Full name is required!";
        }
       

        //check email
        if (formData.email.trim() === "") {
            error.emailErr = "Email is required!"
        }
       
        //check Password
        if (formData.pass.trim() === "") {
            error.passErr = "Password is required!"
        }
        else if (formData.pass.trim().length <= 3) {
            error.passErr = "Password should have minimum 4 digit!";
        }
       
        //check Confirm Password
        if (formData.cpass.trim() === "") {
            error.cpassErr = "Confirm password is required!"
        }
       


        //check Password Match 
        if (error.nameErr || error.emailErr || error.passErr ||error.cpassErr|| error.isPassMatch) {
            setError(error)
            setSuccessMsg("")
        } else if (formData.pass !== formData.cpass) {
            error.isPassMatch = "Error: Please Make sure your passwords and confirm passwords match!"
            setError(error)
            setSuccessMsg("")
        }
        else {
            setSuccessMsg("Successfully Created!");
            setError("")
        }
    }

    return (
        <div className='sign-up-comp'>
            <h1>Create Account</h1>
            <div className='logo-cont'>

                <div className='fac-logo'>
                    <img src={googleicon} alt="goolgle-icon-logo"/>
                    <div>Sign up with Google </div>
                </div>

                <div className='gog-logo'>
                    <img src={facebookIcon} alt="facebook-icon-logo"/>
                    <div>Sign up with Facebook </div>
                </div>

            </div>

            <h3>- OR -</h3>

            <form onSubmit={handleSubmit} >
                <div className='input-cont'>
                <input type="text" autoFocus placeholder='Full Name' onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <div className='errMsg'> {error.nameErr}</div>
                </div>

               <div className='input-cont'>
               <input type="email" placeholder='Email Address' onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <div className='errMsg'>{error.emailErr}</div>
               </div>

                <div className='input-cont'>
                <input type={toggleIcon1? "text":"password"} placeholder='Password' onChange={(e) => setFormData({ ...formData, pass: e.target.value })} />
                {toggleIcon1? (<FaEye onClick={()=> setToggleIcon1(!toggleIcon1)}className='eyeicon'/>):(<FaEyeSlash onClick={()=> setToggleIcon1(!toggleIcon1)} className='eyeicon'/>)}
                <div className='errMsg'>{error.passErr}</div>
                </div>

               <div className='input-cont'>
               <input type={toggleIcon2? "text":"password"} placeholder='Confirm Password' onChange={(e) => setFormData({ ...formData, cpass: e.target.value })} />
               {toggleIcon2? (<FaEye onClick={()=> setToggleIcon2(!toggleIcon2)}className='eyeicon'/>):(<FaEyeSlash onClick={()=> setToggleIcon2(!toggleIcon2)}className='eyeicon'/>)}
                <div className='errMsg'>{error.cpassErr}</div>
               </div>

                <button type="submit">Create Account</button>
            <div className='errMsg'>{error.isPassMatch}</div>
            <div className='succMsg'>{successMsg}</div>
            </form>
        </div>
    )
}

export default SignUp