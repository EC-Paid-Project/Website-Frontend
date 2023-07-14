import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import CustomInput from "../components/CustomInput";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { resetPassword, sendOtp } from "../actions/action";
// import { signup } from "../actions/action";

function ForgetPassword() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [emailSent, setEmailSent] = useState(false);
  const [otp, setOTP] = useState("");
  const [firstResponse, setFirstResponse] = useState({});
  const [secondResponse, setSecondResponse] = useState({});
  
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const onSubmitEmailHandler = async (event) => {
    event.preventDefault();
    const a=await dispatch(resetPassword({email:form.email}))
    if(a!=null){
      setEmailSent(true)
      setFirstResponse(a)
    }
  };

  const onSubmitOTPHandler = async (event) => {
    event.preventDefault();
    if(otp==firstResponse.otp){
      const a=await dispatch(sendOtp({
        "uid":firstResponse.uid,
        "token": firstResponse.token,
        "new_password1":newPassword,
        "new_password2": confirmNewPassword
      },firstResponse.uid,firstResponse.token))
      if(a==200){
        alert("Password has been reset")
    navigate("/signin")
    setEmailSent(false)
    
      }else{
        alert("please provide correct data")
      }
      
    }
  };

  const onSubmitNewPasswordHandler = async (event) => {
    event.preventDefault();
  }
  return (
    <div className="SignupBackground relative min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <Link to="/">
          <img
            src={logo}
            className="w-40 h-auto mt-5 hover:cursor-pointer border-none"
            alt="logo"
          />
        </Link>
        <div className="col-lg-4 col-md-6 mt-10 col-sm-8 mx-auto">
          <div className="p-6 shadow-lg mb-5 rounded-xl SignupForm">
            {emailSent ? (
              <form className="form-group" onSubmit={onSubmitOTPHandler}>
                {errors.general && <p className="text-red-500">{errors.general}</p>}
                <CustomInput
                  label="OTP"
                  placeholder="Enter OTP"
                  type="number"
                  name="otp"
                  icon={<FaLock />}
                  onChange={(event) => setOTP(event.target.value)}
                  required
                />
                <CustomInput
                  label="New Password"
                  placeholder="Enter new password"
                  type="password"
                  name="newPassword"
                  icon={<FaLock />}
                  onChange={(event) => setNewPassword(event.target.value)}
                  required
                />
                <CustomInput
                  label="Confirm New Password"
                  placeholder="Confirm new password"
                  type="password"
                  name="confirmNewPassword"
                  icon={<FaLock />}
                  onChange={(event) => setConfirmNewPassword(event.target.value)}
                  required
                />
                <button
                  className="bg-[#F90105] text-white hover:bg-gray-600 w-full relative inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group hover:ring-4 hover:ring-purple-500"
                  type="submit"
                  disabled={isLoading}
                >
                  Reset Password
                </button>
              </form>
            ) : (
              <form className="form-group" onSubmit={onSubmitEmailHandler}>
                {errors.general && <p className="text-red-500">{errors.general}</p>}
                <CustomInput
                  label="Email"
                  placeholder="name@example.com"
                  type="text"
                  name="email"
                  icon={<FaEnvelope />}
                  onChange={onChangeHandler}
                  errors={errors.email}
                  required
                />
                <button
                  className="bg-[#F90105] text-white hover:bg-gray-600 w-full relative inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group hover:ring-4 hover:ring-purple-500"
                  type="submit"
                  disabled={isLoading}
                >
                   Send
                </button>
              </form>
            )}
            <div className="text-sm text-center mt-2">
              Already have an account?{" "}
              <Link to="/signin">
                <span className="font-bold no-underline">Sign in</span>
              </Link>{" "}
              here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
