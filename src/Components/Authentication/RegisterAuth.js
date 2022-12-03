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
} from "@mui/material";
import "./AuthForm.css";
const RegisterAuth = ({userType}) => {
  return (
    <>
      <div className="authForm">
        <form>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
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
                <TextField
                required
                id="outlined-required"
                label="Teacher ID"
              />
              )}
              <TextField required id="outlined-required" label="CNIC" />
            </div>
          </Box>
          <Box>
            <FormControl fullWidth>
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
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            {userType && (

            <div>
              <TextField
                required
                id="outlined-required"
                type={"Number"}
                label="Session"
              />
              <TextField required id="outlined-required" label="Section" />
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
            <div style={{display: 'flex', justifyContent: 'center'}}> 
              <Button variant="contained" style={{marginBottom: '5px'}}>Register</Button>
            </div>
          </Box>
        </form>
      </div>
    </>
  );
};

export default RegisterAuth;
