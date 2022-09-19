import { useState } from "react";
import AddUser from "./Component/AddUser";
import ErrorModel from "./Component/ErrorModel";
import UserList from "./Component/UserList";
import modal from "./Styles/ErrorModal.module.css";

function App() {
  //hooks
  const [userList, setUserList] = useState([]);

  //func

  return (
    <div className={"app " + modal.backdrop}>
      <AddUser setList={setUserList} />
      <UserList data={userList} />
    </div>
  );
}

export default App;
