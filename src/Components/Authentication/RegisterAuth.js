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
  Typography
} from "@mui/material";
import "./AuthForm.css";
import ToggleButton from "../Custom Buttons/ToggleButton";
const RegisterAuth = ({setAuthType}) => {
  const [userType, setUserType] = useState(true);



  const toggleAuthType = (e) =>{
    e.preventDefault()
    
    setAuthType(false)
  }


  return (
    <>
      <div style={{ display: "flex", justifyContent: "right", margin: "10px" }}>
        <ToggleButton setType={setUserType} type={userType} />
      </div>
      <h1 className="title">Register as {userType ? "Student" : "Teacher"}</h1>
      <div className="authForm">
        <form>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1,},
            }}
          >
            <div>
              <TextField required id="outlined-required" label="First Name" />
              <TextField required id="outlined-required" label="Last Name" />
            </div>
            <div>
              <TextField
                required
                id="outlined-required"
                label="Email"
                type={"email"}
              />
              <TextField required id="outlined-required" label="Phone Number" />
            </div>
            <div>
              {userType ? (
                <TextField
                  required
                  id="outlined-required"
                  label="Registration Number"
                />
              ) : (
                <TextField required id="outlined-required" label="Teacher ID" />
              )}
              <TextField required id="outlined-required" label="CNIC" />
            </div>
          </Box>
          <Box>
            <FormControl >
              <InputLabel id="demo-simple-select-fullwidth-label">
                Select Department
              </InputLabel>
              <Select
                labelId="demo-simple-select-fullwidth-label"
                id="demo-simple-select-fullwidth"
                fullWidth
                // value={age}
                // onChange={handleChange}

                label="Select Department"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, },
            }}
          >
            {userType && (
              <div>
                <TextField
                
                  // style={{width: '20ch'}}
                  required
                  id="outlined-required"
                  type={"Number"}
                  label="Session"
                />
                <TextField  required  id="outlined-required" label="Section" />
              </div>
            )}

            <div>
              <TextField
                required
                id="outlined-required"
                label="Password"
                type={"password"}
              />
              <TextField
                required
                id="outlined-required"
                label="Confirm Password"
                type={"password"}
              />
            </div>
            <div className="registerBtnSection">
              <div className="authToggleLogin">
                <Typography variant="subtitle1" gutterBottom>
                Already have account?
                  <a href="" onClick={toggleAuthType}>
                    {" "}
                    Login
                  </a>
                </Typography>
              </div>

              <Button
                variant="contained"
                style={{ marginBottom: "5px", borderRadius: "3rem" }}
              >
                Register
              </Button>
            </div>
          </Box>
        </form>
      </div>
    </>
  );
};

export default RegisterAuth;
