import "./App.css";
import Login from "./Components/Login";

import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App" >
      {/* <header className="App-header">
        <Box sx={{ width: "90%" }}>
          <LinearProgress />
        </Box>
        <p>Loading...</p>
        <p style={{fontStyle: 'italic'}}>Your Machine is not worthy enough to load this project</p>
      </header> */}

      <Login/>
    </div>
  );
}

export default App;
