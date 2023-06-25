import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import CustomInput from "../components/CustomInput";
import "./Signup.css";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { signup } from "../actions/action";
function 
Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({});

  //add a User
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
  
    if (name === 'email') {
      setForm((prevForm) => ({
        ...prevForm,
        username: value.split('@')[0],
        [name]: value,
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  }

  const onSubmitHandler = (event) => {
    // setIsLoading(true);
    event.preventDefault();
    // axios
    //   .post("/user/signup", form)
    //   .then((response) => {
    //     setTimeout(() => {
    //       setIsLoading(false);
    //       navigate("/signin");
    //     }, 1000);
    //   })
    //   .catch((err) => {
    //     setErrors(err.response.data);
    //     setIsLoading(false);
    //   });
    console.log(form)
dispatch(signup(form) )
    // console.log("User sign up form details are: ");
    // console.log(form);
    // localStorage.setItem("user", JSON.stringify(form));
    // navigate("/");
  };

  return (
    <div className="SignupBackground relative min-h-screen">
      <div className="container flex flex-col">
        <Link to="/">
          <img
            src={logo}
            className="w-40 h-auto mt-5 hover:cursor-pointer border-none"
          />
        </Link>
        {/* <div className="App">{isLoading ? <LoadingSpinner /> : ""}</div> */}
        <div className="col-lg-4 col-md-6 mt-10 col-sm-8 mx-auto ">
          <div className="p-6 shadow-lg mb-5 rounded-xl SignupForm">
            <form class="form-group" onSubmit={onSubmitHandler}>
              <CustomInput
                label="Name"
                placeholder="first name"
                type="text"
                name="first_name"
                icon={<FaUser />}
                className="border rounded"
                onChange={onChangeHandler}
                errors={errors.name}
              />
              <CustomInput
                label="Name"
                placeholder="last name"
                type="text"
                name="last_name"
                icon={<FaUser />}
                className="border rounded"
                onChange={onChangeHandler}
                errors={errors.name}
              />
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
                label="Password1"
                placeholder="password"
                type="password"
                name="password1"
                icon={<FaLock />}
                onChange={onChangeHandler}
                errors={errors.password}
              />
              <CustomInput
                label="Password"
                placeholder="confirm password"
                type="password"
                name="password2"
                icon={<FaLock />}
                onChange={onChangeHandler}
                errors={errors.password}
              />
              <button
                className=" bg-[#F90105] text-white hover:bg-gray-600 w-full relative inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group hover:ring-4 hover:ring-purple-500"
                type="submit"
                disabled={isLoading}
              >
                Register
              </button>
              <div className="text-sm text-center mt-2">
                Already have an account? {FaEnvelope}{" "}
                <Link to="/signin">
                  <span className="font-bold no-underline">Sign in</span>
                </Link>{" "}
                here
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
