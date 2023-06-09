import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sign from "./sign/Sign";
import EOAAccount from "./auth/components/EOAAccount";
import CreateMultisigByScanning from "./multisig/components/CreateMultisigByScanning";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EOAAccount />
        <Sign />
        <CreateMultisigByScanning />
      </header>
    </div>
  );
}

export default App;
