import React, { useState } from "react";
import "../Css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const myFunction = () => {
    var passwordInput = document.getElementById("passwordInput");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <>
      <div className="body-container">
        <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <span>
                  <FontAwesomeIcon icon={faGoogle} size="xl" />
                </span>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <br />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form>
              <h1>Sign in</h1>
              <div className="social-container">
                <span>
                  <FontAwesomeIcon icon={faGoogle} size="xl" />
                </span>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input
                type="password"
                placeholder="Password"
                id="passwordInput"
              />
              {/* <a href="#">Forgot your password?</a> */}

              <div className="showpassword">
                <input type="checkbox" onClick={myFunction} />
                <span className="showpassword-span">
                  &nbsp;Show&nbsp;Password
                </span>
              </div>
              <br />
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" onClick={handleSignInClick}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friends!</h1>
                <p>Enter your personal details and start the journey with us</p>
                <button className="ghost" onClick={handleSignUpClick}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
