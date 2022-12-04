import React, { useState } from "react";
import Register from "./RegisterAuth";
import Login from "./LoginAuth";
import ToggleButton from "../Custom Buttons/ToggleButton";
import AuthWelcome from "./AuthWelcome";
import { Paper } from "@mui/material";

import "./AuthPage.css";
import "./AuthForm.css";
const AuthPage = () => {
  const [authType, setAuthType] = useState(false);

  return (
    <div  className="authContainer">
      <div style={{ width: "50%" }}>
        <AuthWelcome type={authType} setType={setAuthType} />
      </div>
      <div className="authPage">
        <div
          className="paperDesign"
          variant="outlined"
        >
          {authType ? <Register  setAuthType={setAuthType}/>  : <Login setAuthType={setAuthType}/>}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
