import Card from "../Card";
import list from "../../Styles/UsersList.module.css";

function UserList({ data }) {
  return (
    <>
      <Card className={data.length === 0 ? "" : list.users}>
        <ul>
          {data.length === 0 ? (
            <></>
          ) : (
            data.map((data) => (
              <li key={data.id}>
                {data.fullname + " ( " + data.age + " years old )"}
              </li>
            ))
          )}
        </ul>
      </Card>
    </>
  );
}

export default UserList;
