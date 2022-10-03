import UserFinder from "./UserFinder";
import UserList from "./UserList";
import user from "./User.module.css";

function Users(props) {
  return (
    <div className={user.user}>
      <UserFinder />
    </div>
  );
}

export default Users;
