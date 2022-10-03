// Comp hien thi Form tim kiem
import { useContext, useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import userContext from "./userContext";
import user from "./UserFinder.module.css";
import UserList from "./UserList";

function UserFinder() {
  //hooks
  const users = useContext(userContext);
  const [FilteredUser, setFilter] = useState(users);
  const [searchTerm, setSearch] = useState("");
  console.log(FilteredUser);

  useEffect(() => {
    //logic
    setFilter(users.filter((user) => user.name.includes(searchTerm)));
  }, [searchTerm]);
  return (
    <>
      <div className={user.finder}>
        <input type={"text"} onChange={(e) => setSearch(e.target.value)} />
      </div>
      {FilteredUser.length === 0 ? (
        <ErrorBoundary />
      ) : (
        <UserList DUMMY_USERS={FilteredUser} />
      )}
    </>
  );
}

export default UserFinder;
