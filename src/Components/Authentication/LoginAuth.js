import React, { useState } from "react";
import { Paper, TextField, Box, Select, MenuItem,FormControl, InputLabel } from "@mui/material";
import "./AuthForm.css";
const Login = () => {
  const [toggleLoginType, setToggleLoginType] = useState(1);
  return (
    <>
      <Paper
        className="paperDesign"
        variant="outlined"
        style={{
          borderStartStartRadius: "7rem",
          borderEndStartRadius: "7rem",
          backgroundColor: "rgb(255 255 255 / 82%)",
        }}
      >
        <h2 className="title">Apply as Student</h2>
        <div className="authForm">
          <form>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
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
                <TextField
                  required
                  id="outlined-required"
                  label="Phone Number"
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Registration Number"
                />
                <TextField required id="outlined-required" label="CNIC" />
              </div>
            </Box>
            <Box>
              <FormControl fullWidth >
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
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField required id="outlined-required" type={"Number"} label="Session" />
                <TextField required id="outlined-required" label="Section" />
              </div>

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
              <Button variant="contained">Contained</Button>
            </Box>
          </form>
        </div>
      </Paper>
    </>
  );
};

export default Login;
