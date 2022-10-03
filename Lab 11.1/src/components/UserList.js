//Comp hien thi danh sach  user
import { useContext, useState } from "react";
import userContext from "./userContext";
import users from "./Users.module.css";
function UserList(props) {
  // initvalue
  const { DUMMY_USERS } = props;
  // hooks
  const [showUsers, setShowUsers] = useState(true);
  return (
    <div className={users.users}>
      <button onClick={() => setShowUsers(false)}>Hide Users</button>
      {showUsers && (
        <ul>
          {DUMMY_USERS.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
