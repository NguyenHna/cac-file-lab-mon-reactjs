import React, { useState, useCallback, useMemo, createContext } from "react";
import UserFinder from "./components/UserFinder";
import UserList from "./components/UserList";
import userContext from "./components/userContext";
import Users from "./components/Users";

function App() {
  const DUMMY_USERS = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manuel" },
    { id: "u3", name: "Julie" },
  ];

  return (
    <>
      <userContext.Provider value={DUMMY_USERS}>
        <Users />
      </userContext.Provider>
    </>
  );
}

export default App;
