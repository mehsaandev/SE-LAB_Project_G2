import React, { useState } from "react";
import { Paper, TextField, Box } from "@mui/material";
import "./Login.css";
const Login = () => {
  const [toggleLoginType, setToggleLoginType] = useState(1);
  return (
    <>
      <Paper
        className="paperDesign"
        variant="outlined"
        elevation={3}
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
              <TextField
                required
                id="outlined-required"
                label="First Name"
              />
              <TextField
                required
                id="outlined-required"
                label="Last Name"
              />
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
            <TextField
              required
              id="outlined-required"
              label="CNIC"
            />
            </div>
            </Box>
            <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >

            <div>
            <TextField
              required
              id="outlined-required"
              label="Department"
              fullWidth
            />
            </div>
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
            <TextField
              required
              id="outlined-required"
              label="Session"
            />
            <TextField
              required
              id="outlined-required"
              label="Section"
            />
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
              type={"password"}/>
            </div>
          </Box>
         
            </form>
         
        </div>
      </Paper>
    </>
  );
};

export default Login;
