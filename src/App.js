// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Disabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#070c64";
      showAlert("Dark Mode Enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-30">
        {/* <Routes>
            <Route exact path="/about"> */}
        {/* </Route> */}
        {/* <Route exact path="/"> */}
        <TextForm
          heading="Enter Text Below:"
          mode={Mode}
          showAlert={showAlert}
        />

        {/* </Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
