// import axios from "axios";
import React, { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
// import GoogleAuth from "./GoogleAuth/GoogleOAuth.jsx";
import "./Signin.css";
import logo from "../assets/logo.png";
// import bg from "../assets/bg.jpg";
import { googlelogin, login } from "../actions/action";
import { useDispatch } from "react-redux";
import { auth, provider } from "./Firebase/config";
import { signInWithPopup } from "firebase/auth";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState();
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  //User signin
  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = async(event) => {
    event.preventDefault();
    setIsLoading(true);


    try{
  const response =await  dispatch(login(form));


    if (response.status===200) {
      setTimeout(() => {
        navigate("/",{replace:true});
        setIsLoading(false);
        setErrors(  "" );
      }, 100);
    } else {
      setErrors(  "Invalid Credentials" );
      return;
    }}catch(error){
      setErrors(  "Invalid Credentials" );
      return;
    }
  };

  const handleFirebaseLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const a = dispatch(googlelogin(result._tokenResponse.idToken));
        if (a) {
          const { email, displayName, photoURL, uid } = result.user;
          const userDetails = {
            email,
            name: displayName,
            img: photoURL,
            uid,
            username: email.split("@")[0],
          };
          localStorage.setItem("user", JSON.stringify(userDetails));
          setTimeout(() => {
            navigate("/",{replace:true});
            setIsLoading(false);
          }, 1000);
        } else {
          window.alert("Dispatch to Server Unsuccessful, Please try again!");
        }
      })
      .catch((error) => {
        window.alert("Signin Unsuccessful, Please try again!");
      });
  };

  return (
    <div className="relative min-h-screen SigninBackground">
      <div className="flex flex-col z-10 justify-center items-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-40 h-auto mt-5 hover:cursor-pointer border-none"
          />
        </Link>
        <div className="SignInForm shadow-lg col-lg-4 mt-5 col-md-6 col-sm-8 mx-auto rounded-xl p-6">
          <form className="form-group">
            <CustomInput
              label="Email"
              placeholder="name@exemple.com"
              type="text"
              name="email"
              icon={<FaEnvelope />}
              onChange={onChangeHandler}
              // errors={errors.email}
            />
            <CustomInput
              label="Password"
              placeholder="password"
              type="password"
              name="password"
              icon={<FaLock />}
              onChange={onChangeHandler}
              // errors={errors.password}
              password
            />
            {errors && (
  <p className="text-red-500 text-sm text-center align-middle">{errors}</p>
)}
            <button
              type="button"
              onClick={onSubmitHandler}
              className=" bg-[#F90105] hover:bg-gray-600 w-full relative inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group hover:ring-4 hover:ring-purple-500"
            >
              <span className="relative text-white font-bold px-4">
                Sign in
              </span>
            </button>
            <div className="flex flex-col items-center px-3 mb-2">
              <div className="line"></div>
              <div className="text-sm text-center">
              <Link to="/forgetPassword">
                <span className="font-bold underline">Forget Password</span>
              </Link>{" "}
            </div>
              <p>
                <span className="or text-center text-lg">OR</span>
              </p>
            </div>
            {/* <button
              onClick={handleFirebaseLogin}
              className=" bg-[#F90105] hover:bg-gray-600 w-full relative inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group hover:ring-4 hover:ring-purple-500"
            >
              <span className="relative text-white font-bold px-4">
                Sign in with Google
              </span>
            </button> */}
           
            <div className="text-sm text-center">
              If you don't have an account yet,{" "}
              <Link to="/signup">
                <span className="font-bold underline">Create One</span>
              </Link>{" "}
              here!
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;