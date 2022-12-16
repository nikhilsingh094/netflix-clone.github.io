import React, { useState } from "react";
import "./css/login.css";
import SignUp from "./SignUp";
function Login() {
  const [sign, setSign] = useState(false);

  const showSignUp = (e) => {
    e.preventDefault();
    setSign(true);
  };
  return (
    <div className="login">
      <div className="login_header">
        <img
          className="login_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />

        <button className="login_button">Sign In</button>
      </div>

      <div className="login_body">
        {sign ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form className="login_form">
              <input type="text" placeholder="Email Address" />
              <button onClick={showSignUp}>Get started</button>
            </form>
          </>
        )}
      </div>
      <div className="login_gradient"></div>
    </div>
  );
}

export default Login;
