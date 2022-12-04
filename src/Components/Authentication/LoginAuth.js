import React, { useState } from "react";
import {
  Paper,
  TextField,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  emphasize,
} from "@mui/material";
import "./AuthForm.css";
import ToggleButton from "../Custom Buttons/ToggleButton";
const RegisterAuth = () => {
  const [userType, setUserType] = useState(true);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "right", margin: "10px" }}>
        <ToggleButton setType={setUserType} type={userType} />
      </div>
      <h1 className="title">Login</h1>
      <div className="authForm">
        <form>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <TextField required id="outlined-required" style={{width: '35ch'}} label="Email" type={"email"}/>
              <TextField required id="outlined-required" style={{width: '35ch'}} label="Password" type={"password"} />
            </div>
         
            
          </Box>

          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                style={{ marginBottom: "5px", borderRadius: "3rem" }}
              >
                Login
              </Button>
            </div>
          </Box>
        </form>
      </div>
    </>
  );
};

export default RegisterAuth;
