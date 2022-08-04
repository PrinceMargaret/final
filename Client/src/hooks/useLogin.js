import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      window.alert("Login falied")
      
      document
        .getElementById("LoginAlertFailed")
        .classList.remove("loginFailedalert");
      document
        .getElementById("LoginAlertFailed")
        .classList.add("loginFailedalertdisplay");

      document
        .getElementById("LoginAlertSuccess")
        .classList.add("loginSuccessalert");
      document
        .getElementById("LoginAlertSuccess")
        .classList.remove("loginSuccessalertdisplay");

      navigate("/login")
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)

      document
        .getElementById("LoginAlertSuccess")
        .classList.remove("loginSuccessalert");
      document
        .getElementById("LoginAlertSuccess")
        .classList.add("loginSuccessalertdisplay");
      document
        .getElementById("LoginAlertFailed")
        .classList.add("loginFailedalert");
      document
        .getElementById("LoginAlertFailed")
        .classList.remove("loginFailedalertdisplay");

      navigate("/")
    }
  }

  return { login, isLoading, error }
}