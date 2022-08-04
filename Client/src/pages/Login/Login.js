import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { Link, useHref, useNavigate } from "react-router-dom";
import loginImg from "../../img/login.PNG";
import MusicGirl from "../../img/MusicGirl.png";
import signup from "../../img/Headphone_girl.png";
import config from "../../config";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const navigate = useNavigate();
  const { login, isLoading, error } = useLogin();

  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  // handle inputs
  let name, value;
  const handleRegisterInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setSignUp({ ...signUp, [name]: value });
  };

  const handleLoginInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setLoginUser({ ...loginUser, [name]: value });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const username = values.username;
      const email = values.email;
      const password = values.password;

      const res = await fetch(config.apiRegisterUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      // alert(`${username} registered`);
      const data = await res.json();
      console.log(data);
      if (data.status === 409) {
        toastFailure(data.message);
      } else if (data.status === 200) {
        toastSuccess(data.message);
      } else {
        toastFailure(data.error);
      }
    },

    validationSchema: yup.object().shape({
      username: yup
        .string()
        .min(3, "Username is too short")
        .max(12, "Username is too long")
        .required("Username cannot be left blank"),
      email: yup
        .string()
        .email("Invalid Email Address")
        .required("Email cannot be left blank"),
      password: yup
        .string()
        .required("Password cannot be left blank")

        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),

      confirmPassword: yup
        .string()
        .required("Confirm Password cannot be left blank")
        .test(
          "confirmPassword",
          "Password & confirm password should be same",
          function (confirmpass) {
            if (this.parent.password === confirmpass) {
              return true;
            }
            return false;
          }
        ),
    }),
  });

  const toastSuccess = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const toastFailure = (message) =>
    toast.error(message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  // connecting to backend
  const RegisterData = async (e) => {
    const { username, email, password } = signUp;

    const res = await fetch(config.apiRegisterUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.status === 409) {
      window.alert("User already exists");
    } else if (data.status === 200) {
      window.alert("User registered successfully");
    } else {
      window.alert("Registration failed");
    }
  };

  const UserLogin = async (e) => {
    const { email, password } = loginUser;
    await login(email, password);

    // const { email, password } = loginUser;

    // const res = await fetch(config.apiLoginUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });

    // const loginData = await res.json();

    // /* usernam = User.find(email); */

    // if (loginData.status === 200) {
    //   /* window.alert("logged in successfully");
    //   onClick = { signInButton }; */
    //   document
    //     .getElementById("LoginAlertSuccess")
    //     .classList.remove("loginSuccessalert");
    //   document
    //     .getElementById("LoginAlertSuccess")
    //     .classList.add("loginSuccessalertdisplay");
    //   document
    //     .getElementById("LoginAlertFailed")
    //     .classList.add("loginFailedalert");
    //   document
    //     .getElementById("LoginAlertFailed")
    //     .classList.remove("loginFailedalertdisplay");

    //   navigate(`/home/${email}`);
    // } else {
    //   /* alert(
    //     "You are not authorized. Please check your email and password."
    //   ); */
    //   document
    //     .getElementById("LoginAlertFailed")
    //     .classList.remove("loginFailedalert");
    //   document
    //     .getElementById("LoginAlertFailed")
    //     .classList.add("loginFailedalertdisplay");

    //   document
    //     .getElementById("LoginAlertSuccess")
    //     .classList.add("loginSuccessalert");
    //   document
    //     .getElementById("LoginAlertSuccess")
    //     .classList.remove("loginSuccessalertdisplay");
    // }
  };

  const signUpButton = () => {
    document.getElementById("container").classList.add("sign-up-mode");

    document.getElementById("signin").classList.add("signin-signup2");
    document.getElementById("signin").classList.remove("signin-signup");

    document.getElementById("panel").classList.remove("right-panel2");
  };

  const signInButton = () => {
    document.getElementById("container").classList.remove("sign-up-mode");

    document.getElementById("signin").classList.remove("signin-signup2");
    document.getElementById("signin").classList.add("signin-signup");

    document.getElementById("panel").classList.add("right-panel2");
  };

  const difftoast = (responseMsg) => {
    let popUpText =
      responseMsg === "already exist"
        ? "Email id already exist"
        : "Registration Successfull";
    toast.success(popUpText, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container" id="container">
      <div className="forms-container">
        {/* LOGIN FORM */}

        <div className="signin-signup" id="signin">
          <form method="POST" className="sign-in-form">
            <h2 className="title">Sign In</h2>

            <div className="loginFailedalert" id="LoginAlertFailed">
              <Alert severity="error">
                You are not authorized. Please check your email and password.
              </Alert>
            </div>

            <div className="loginSuccessalert" id="LoginAlertSuccess">
              <Alert severity="success">Logged in Successfully</Alert>
            </div>

            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                key="email"
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                value={loginUser.email}
                onChange={handleLoginInputs}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                id="password"
                key="password"
                name="password"
                type="password"
                placeholder="Password"
                value={loginUser.password}
                onChange={handleLoginInputs}
              />
            </div>

            <div>
              <Link
                className="forgot-password-link"
                to="/forgot-password"
                style={{ color: "#123456", textDecoration: "none" }}
              >
                Forgot your password?
              </Link>
            </div>

            <button
              type="button"
              className="btn solid"
              disabled={isLoading}
              onClick={UserLogin}
            >
              Login
            </button>
            <p className="social-text">Or Sign in with social Platforms</p>
            <div className="social-media">
              {/* <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a> */}
              {/* <a href="/auth/google" className="social-icon"> */}
              <form action="http://localhost:5000/auth/google" method="get">
                {/* <i className="social-icon fab fa-google"></i> */}
                <button type="submit" class="login-with-google-btn">
                  Sign in with Google
                </button>
              </form>
              {/* </a> */}
            </div>
          </form>
        </div>

        {/* SIGN UP FORM */}

        <div className="signup-signup" id="signup">
          <form
            method="post"
            className="sign-up-form"
            onSubmit={formik.handleSubmit}
          >
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                key="username"
                id="username"
                name="username"
                type="text"
                value={formik.values.username}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Username"
                //value={signUp.username}
                //onChange={handleRegisterInputs}
              />
            </div>
            {formik.errors.username && formik.touched.username ? (
              <div
                className="warning"
                style={{ color: "red", fontSize: "12px" }}
              >
                {formik.errors.username}
              </div>
            ) : null}

            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                key="email"
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Email"
                //value={signUp.email}
                //onChange={handleRegisterInputs}
              />
            </div>
            {formik.errors.email && formik.touched.email ? (
              <div
                className="warning"
                style={{ color: "red", fontSize: "12px" }}
              >
                {formik.errors.email}
              </div>
            ) : null}
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                key="password"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                //value={signUp.password}
                //onChange={handleRegisterInputs}
              />
            </div>
            {formik.errors.password && formik.touched.password ? (
              <div
                className="warning"
                style={{ color: "red", width: "300px", fontSize: "12px" }}
              >
                {formik.errors.password}
              </div>
            ) : null}
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                key="confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Confirm Password"
                //value={signUp.confirmPassword}
                //onChange={handleRegisterInputs}
              />
            </div>
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <div
                className="warning"
                style={{ color: "red", fontSize: "12px" }}
              >
                {formik.errors.confirmPassword}
              </div>
            ) : null}
            <button
              type="submit"
              className="btn solid"
              /* onClick={RegisterData} */
            >
              Register
            </button>
            {/* <p className="social-text">Or Sign Up with social Platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
            </div> */}
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h1>New Here?</h1>

            <button
              className="btn transparent LoginSignUpBtn"
              id="sign-up-button"
              onClick={signUpButton}
            >
              Sign Up
            </button>

            <h2 style={{ marginTop: "50px" }}>Life is a song, Love is the music</h2>
          </div>
          <img src={MusicGirl} className="image" />
        </div>

        <div className="panel right-panel" id="panel">
          <div className="content">
            <h1>One of Us</h1>
            
            <button
              className="btnn transparentt"
              id="sign-in-button"
              onClick={signInButton}
            >
              Sign In
            </button>

            <h2 style={{ marginTop: "50px" }}>
              Musix is Life that's why our heart have beats.
            </h2>
          </div>
          <img src={signup} className="image" />
        </div>
      </div>
    </div>
  );
}
