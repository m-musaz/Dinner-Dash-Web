import React, { useEffect, useState } from "react";
import styles from "./Auth.module.css";
// import LoginForm from "./LoginForm";
// import SignupForm from "./SignupForm";
import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Auth = () => {
  const [formstate, setformstate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.search == "?signout=true" ? setformstate(true) : false;
  }, []);

  return (
    <div className={`container-fluid ${styles.outercontainer}`}>
      <div className="row">
        <div className={`col-12 ${styles.innercontainer}`}>
          <div className="row">
            {formstate === true ? (
              <SignupForm statefun={setformstate} />
            ) : (
              <LoginForm statefun={setformstate} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
