import React, { useState } from "react";
import {
  TextField,
  Box,
  Button,
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import "./AuthForm.css";
import ToggleButton from "../Custom Buttons/ToggleButton";
const RegisterAuth = () => {
  const [userType, setUserType] = useState(true);

  return (
    <>
      <h1 className="title">Login</h1>
      <div className="authForm">
        <form>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                required
                id="outlined-required"
                style={{ width: "35ch" }}
                label="Email"
                type={"email"}
              />
              <TextField
                required
                id="outlined-required"
                style={{ width: "35ch" }}
                label="Password"
                type={"password"}
              />
            </div>
            <Typography variant="subtitle1" gutterBottom>
              <a href="#">Forgot Password?</a>
            </Typography>
          </Box>

          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember me"
                />
              </FormGroup>
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
