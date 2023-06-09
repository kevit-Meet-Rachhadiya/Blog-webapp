import React, { useState } from "react";
import "../Css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    setUsernameError("")
    setEmailError("")
    setPasswordError("")
    setUsername("")
    setEmail("")
    setPassword("")
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameError("");
  };

  const validateUsername = () => {
    const regex = /^[a-zA-Z0-9_]{3,16}$/;

    if (username.length < 3) {
      setUsernameError("*Username must be at least 3 characters long.");
    } else if (username.length > 16) {
      setUsernameError("*Username cannot exceed 16 characters.");
    } else if (!regex.test(username)) {
      setUsernameError(
        "*Username can only contain letters, numbers, and underscores."
      );
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError("");
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      setEmailError("*Please enter a valid email address.");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError("");
  };

  const validatePassword = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/;

    if (password.length < 8 || password.length > 16) {
      setPasswordError("*Password must be between 8 and 16 characters.");
    } else if (!regex.test(password)) {
      setPasswordError(
        "*Password must contain at least one lowercase letter, one uppercase letter, and one digit."
      );
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    validateUsername();
    validateEmail();
    validatePassword();

    if (!usernameError && !emailError && !passwordError) {
      // Perform sign-up logic
      console.log("Sign up form submitted successfully!");
    }
  };

  return (
    <>
      <div className="body-container">
        <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
          <div className="form-container sign-up-container">
            <form action="#" onSubmit={handleSignUpSubmit}>
              <h1>Create Account</h1>
              <div className="social-container">
                <span>
                  <FontAwesomeIcon icon={faGoogle} size="xl" />
                </span>
              </div>
              <span>or use your email for registration</span>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                onBlur={validateUsername}
              />
              {usernameError && <p style={{ color: "red" }}>{usernameError}</p>}
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                onBlur={validateEmail}
              />
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={validatePassword}
              />
              {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
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
              <input type="text" placeholder="Email" />
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
