import React, { useState, useEffect } from "react";
import { Typography, Button, Fade } from "@mui/material";
import "./AuthWelcome.css";

const AuthWelcome = ({ setType, type }) => {
  const toggleAuthType = () => {
    setType((previosValue) => !previosValue);
  };

  return (
    <div className="welcomeContainer">
      <div className="welcome">
        <Typography className="center" variant="h3" color="white" gutterBottom>
          Welcome
        </Typography>

        <Typography
          className="center"
          color="#dbdbdb"
          variant="subtitle1"
          gutterBottom
        >
          {type
            ? "Just one click away from registration"
            : "Access your account "}
        </Typography>
      </div>
      <div className="authToggle">
        <Typography color="#dbdbdb" variant="subtitle1" gutterBottom>
          {type ? "Already have account?" : "No Account?"}
        </Typography>

        <Button
          style={{ borderRadius: "3rem" }}
          onClick={toggleAuthType}
          variant="contained"
        >
          {type ? "Login" : "Register"}
        </Button>
      </div>
    </div>
  );
};

export default AuthWelcome;
