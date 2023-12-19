import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import useToken from "./useToken";
import Register from "./Identity/Register";
import Login from "./Identity/Login";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Create from "./Components/Create.js";
import Edit from "./Components/Edit";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    console.log("Token is not present");
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/Login" element={<Login setToken={setToken} />} />
            <Route path="/Register" element={<Register />} />
            <Route path="*" element={<Navigate to="/Login" />} />
          </Routes>
        </Router>
      </div>
    )
  }

  console.log("token is " + token);

  return (
    <div className="App">
      <Router>
        <Navbar setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );


}

export default App;
