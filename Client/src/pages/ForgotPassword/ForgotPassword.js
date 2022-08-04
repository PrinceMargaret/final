import React, {useState, useref} from 'react'
import ResetPassword from "../ResetPassword/ResetPassword";
import "./ForgotPassword.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [otpForm, setOtpForm] = useState("true");
    const handleChange = (e)=>{
        console.log(e.target);
        setEmail(e.target.value);
    }
    const SendEmailforForgotPassword = async(e)=>{
        const res = await fetch("http://localhost:8000/api/forgotpassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                email
            })
        }).then(
            data => data.json())
        .then(data=> 
           {if(data.message == 'User not found'){
             
                
                
                error(data.message, setOtpForm(true))
                }
            else{
                 
                 const msg = "OTP Sent to Email" 
                 difftoast(msg, setOtpForm(false))
                 
            }})
            
            
        }
        
        
        

        
    const difftoast = (msg) => {
        
        toast.success(msg, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
      });
    }

    const error = (msg) => {
        
        toast.error(msg, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
      });
    }

    
  return (
    <div className='ForgotPassword'>
        {otpForm? <div className='input-container'>
            <div className='heading-text'>
                <h1 style={{color: 'white'}}>Password Reset</h1>
                <p>
                    Enter your <strong>Muzix email address</strong> that you used to register. We'll send you an email with a link to reset your password.
                </p>
            </div>
            <form className='ForgotForm' method='POST'>
                <label>Enter email address</label>
                <input
            className="inputReset" 
                    id='forgotpasswordemail' 
                    key="forgotpasswordemail" 
                    name='email' 
                    placeholder='Email Address' 
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required/>
            </form>
            <button className='ForgotBtn' type='button' onClick={SendEmailforForgotPassword}>Submit</button>
        </div> : <ResetPassword email={email}/>}
        <ToastContainer/>
    </div>
  )
}
