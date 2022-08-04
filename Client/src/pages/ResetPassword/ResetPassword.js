import React, {useState} from 'react'
import { useNavigate } from 'react-router';
import axios from "axios"
import "./ResetPassword.css"

export default function ResetPassword(props) {
  // const [inputField, setInputField] = useState({
  //   otpCode: "",
  //   newPassword: "",
  //   cPassword: ""
  // })
  const [otpCode, setOtpCode] = useState("")
  const [newPassword, setNewPassworde] = useState("")
  const [cPassword, setCPassword] = useState("")
  const naviagte = useNavigate();

  const [errField, setErrField] = useState({
    passwordErr: "",
    cPasswordErr: "",
    otpCodeErr: ""
  })

  const validForm = ()=>{
    let FormIsValid = true
    setErrField({
      passwordErr: "",
      cPasswordErr: "",
      otpCodeErr: ""
    })
    if(otpCode === ""){
      FormIsValid = false;
      setErrField(prevState=>({
        ...prevState, otpCodeErr: "please enter OTP"
      }))
    }
    if(newPassword === ""){
      FormIsValid = false;
      setErrField(prevState=>({
        ...prevState, passwordErr: "please enter new password"
      }))
    }
    if(cPassword === "" || newPassword !== cPassword){
      FormIsValid = false;
      setErrField(prevState=>({
        ...prevState, cPasswordErr: "please enter confirm password"
      }))
    }
    return FormIsValid
  }

  const UpdatePassword = async (e)=>{
    if(validForm()){
      const url = "http://localhost:8000/api/resetpassword"
      let options = {
        method: 'POST',
        url: url,
        data: {
          otpCode,
          newPassword,
          ...props
        }
      }
      try {
        let res = await axios(options)
        const data = await res.data;
        console.log(data)
        if(data.success){
          window.alert("Password updated successfully");
          naviagte("/login")
        }
        else{
          window.alert("Incorrect Email");
        }
      } catch (error) {
        window.alert("Something went wrong");
      }
    }


  }

  return (
    <div className='resetpassword'>
        <div className='text-container'>
            Password Reset
        </div>
        <div className='input-container'>
            <form className='resetForm' method='POST'>
                <label>Enter OTP Code</label>
                <input 
                    className='inputReset'
                    id='otpcode' 
                    key="otpcode" 
                    name='otpCode' 
                    placeholder='Enter OTP Code' 
                    type="text"
                    maxLength="4"
                    value={otpCode}
                    onChange={(e)=>setOtpCode(e.target.value)}
                    required/>
                {errField.otpCodeErr.length > 0 && <div className='error' >{errField.otpCodeErr}</div>}
            
                <label>Enter new password</label>
                <input 
                    className='inputReset'
                    id='newpassword' 
                    key="newpassword" 
                    name='newpassword' 
                    placeholder='Enter new password' 
                    type="password"
                    value={newPassword}
                    onChange={(e)=>setNewPassworde(e.target.value)}
                    required/>
                {errField.passwordErr.length > 0 && <div className='error' >{errField.passwordErr}</div>}

            
                <label>Confirm new password</label>
                <input 
                    className='inputReset'
                    id='cpassword' 
                    key="cpassword" 
                    name='cpassword' 
                    placeholder='Confirm new password' 
                    type="password"
                    value={cPassword}
                    onChange={(e)=>setCPassword(e.target.value)}
                    required/>
                {errField.cPasswordErr.length > 0 && <div className='error' >{errField.cPasswordErr}</div>}
            </form>
            <button type='button' onClick={UpdatePassword} >Submit</button>
        </div>
    </div>
  )
}
