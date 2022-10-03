import React, { useState, useCallback, useMemo, createContext } from "react";
import TaskForm from "./components/NewTask/TaskForm";
import Tasks from "./components/Tasks/Tasks";
import UI from "./components/UI/Section.module.css";

import "./index.css";

function App() {
  return (
    <div className={UI.section}>
      <TaskForm />
      <Tasks />
    </div>
  );
}

export default App;
