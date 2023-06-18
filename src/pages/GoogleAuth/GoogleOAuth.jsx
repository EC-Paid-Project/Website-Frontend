import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const GOOGLE_IP = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const GoogleOAuth = () => {
    const navigate = useNavigate();

    const responseGoogle = (response) => {
        console.log(response);
         const userObject = jwt_decode(response.credential);
         //console.log(userObject);
         localStorage.setItem('user', JSON.stringify(userObject));
         const { name, sub, picture } = userObject;
         const doc = {
           _id: sub,
           _type: 'user',
           userName: name,
           image: picture,
         };
        //  client.createIfNotExists(doc).then(() => {
        //    navigate('/', { replace: true });
        //  });
        console.log("Google auth sign in details are: ")
        console.log(doc)
        navigate('/')
       }
  
    return (
      <div className="">
            <div className="">
              <GoogleOAuthProvider 
                  clientId={`${GOOGLE_IP}`}
                  >
               <GoogleLogin
                render={(renderProps) => (
                  <button
                    type="button"
                    className=""
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <FcGoogle className="" /> Sign in with google
                  </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                // cookiePolicy="single_host_origin"
              />
              </GoogleOAuthProvider>
            </div>
      </div>
    )
  }
  
  export default GoogleOAuth