import React from "react";
import "./App.css";
import { Link, Redirect, Router } from "@reach/router";

import Homepage from "./views/Homepage";
import NewPlayer from "./views/AddPlayer";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <NewPlayer path="/players/addplayer" />
      </Router>
    </div>
  );
}

export default App;
