// import axios from "axios";
import React, { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import GoogleAuth from "./GoogleAuth/GoogleOAuth.jsx";
import "./Signin.css";
import logo from "../assets/logo.png";
import bg from "../assets/bg.jpg";
import { login, signup } from "../actions/action";
import { useDispatch } from "react-redux";

function Signin() {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  //User signin
  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
      console.log("User sign in without google, form details are: ");
      console.log(form);
  
     const a=dispatch(login(form))
      if(a){
        console.log(a)
      
      // localStorage.setItem("user", JSON.stringify(form));
      // localStorage.setItem("fullName", 'Mohib Qureshi');
      // localStorage.setItem("username", "mohib123");
      // localStorage.setItem("email", 'mohib@gmail.com');
      // localStorage.setItem("phone", '03219876541');
      // localStorage.setItem("address", "Gulshan-e-Iqbal, Karachi");
      // navigate("/");
    }
    else{
      setErrors({ ...errors, empty: "Please fill in all fields" });
      return;
    }

    // axios
    //   .post("/user/signin", form)
    //   .then((response) => {
    //     const token = response.data.token;
    //     // Save token to localStorage
    //     localStorage.setItem("user-token", JSON.stringify(token));
    //     localStorage.setItem("user", JSON.stringify(response.data.user));

    //     window.location.reload(false);
    //     setTimeout(() => {
    //       navigate("/home");
    //       setIsLoading(false);
    //     }, 1000);
    //   })
    //   .catch((err) => {
    //     setErrors(err.response.data);
    //     setIsLoading(false);
    //   });
  };

  const informParent = (response) => {
    setIsLoading(true);
    const token = response.data.token;
    // Save token to localStorage
    localStorage.setItem("authToken", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(response.data.user));
    console.log(JSON.stringify(response.data.user));
    window.location.reload(false);
    setTimeout(() => {
      navigate("/");
      setIsLoading(false);
    }, 1000);
  } 

  return (
    <div className="relative min-h-screen SigninBackground">
      <div className="container flex flex-col z-10" onSubmit={onSubmitHandler}>
        <Link to="/">
          <img
            src={logo}
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
              errors={errors.email}
            />
            <CustomInput
              label="Password"
              placeholder="password"
              type="password"
              name="password"
              icon={<FaLock />}
              onChange={onChangeHandler}
              errors={errors.password}
              password
            />
            <button
              type="submit"
              className=" bg-[#F90105] hover:bg-gray-600 w-full relative inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group hover:ring-4 hover:ring-purple-500"
            >
              <span className="relative text-white font-bold px-4">
                Sign in
              </span>
            </button>
            <div className="flex flex-col items-center px-3 mb-2">
              <div className="line"></div>
              <p>
                <span className="or text-center text-lg">OR</span>
              </p>
            </div>
            <div className="flex flex-col mb-3 gap-2 items-center text-sm social-media">
              <GoogleAuth informParent={informParent} />
            </div>
            <div className="text-sm text-center">
              If you dont have an account yet,{" "}
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
  // return (
  //   <div className="App">{isLoading ? <LoadingSpinner /> : renderSignin}</div>
  // );
}

export default Signin;
