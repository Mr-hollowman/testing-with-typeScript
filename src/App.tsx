import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/Application";
import { Skills } from "./components/skills/Skills";
import { Counter } from "./components/counter/Counter";
import { AppProviders } from "./provider/AppProvider";
import { MuiMode } from "./components/mui/MuiMode";

function App() {
  return (
    // <div className="App">
    //   {/* <Application /> */}
    //   {/* <Skills skills={["HTML", "CSS", "javaScript", "typeScript"]} /> */}
    //   <Counter />
    // </div>
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
