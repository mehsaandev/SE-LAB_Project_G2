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
    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <div style={{ width: "50%" }}>
        <AuthWelcome type={authType} setType={setAuthType} />
      </div>
      <div className="authPage">
        <Paper
          className="paperDesign"
          variant="outlined"
          style={{
            borderStartStartRadius: "7rem",
            borderEndStartRadius: "7rem",
            backgroundColor: "rgb(255 255 255 / 82%)",
          }}
        >
          {authType ? <Register />  : <Login />}
        </Paper>
      </div>
    </div>
  );
};

export default AuthPage;
