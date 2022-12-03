import React, { useState } from "react";
import Register from "./RegisterAuth";
import ToggleButton from "../Custom Buttons/ToggleButton";
import { Paper } from "@mui/material";

import "./AuthPage.css";
import "./AuthForm.css";
const AuthPage = () => {
  const [userType, setUserType] = useState(true);
  const [authType, setAuthType] = useState(false);

  return (
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
        <div
          style={{ display: "flex", justifyContent: "right", margin: "10px" }}
        >
          <ToggleButton setType={setUserType} type={userType}/>
        </div>
        <h2 className="title">
          Register as {userType ? "Student" : "Teacher"}
        </h2>

        <Register userType={userType} />
      </Paper>
    </div>
  );
};

export default AuthPage;
