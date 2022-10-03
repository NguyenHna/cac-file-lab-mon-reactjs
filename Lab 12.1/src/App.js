import React, { useState, useCallback, useMemo, createContext } from "react";
import AddMovie from "./components/AddMovie";
import "./App.css";
import "./index.css";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="App">
      <AddMovie />
      <Movie />
    </div>
  );
}

export default App;
