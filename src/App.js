import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);

    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enable", "success");
      // document.title='Textutils-Dark Mode'
      // setInterval(()=>{
      //   document.title='Textutils is Amazing mode'
      // }, 1500);
      // setInterval(()=>{
      //   document.title='Install Textutils now'
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      // document.title='Textutils-Light Mode'
    }
  };
  return (
    <>
      {/* <Navbar title="Textutils" aboutText="About" /> */}
      <Router>
        <Navbar
          title="Textutils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* <Navbar /> */}
        <div className="container my-3">
          <Switch>
            {/* user-.component 1
            user/home=component 2 */}
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try Textutils - Word counter,character counter, Remove extra spaces etc" mode={mode} />
            </Route>
          </Switch>
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> */}
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;