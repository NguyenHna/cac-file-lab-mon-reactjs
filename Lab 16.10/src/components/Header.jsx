import { useDispatch } from "react-redux";
import { Logout, LOGOUT } from "../redux/action";
import header from "./Header.module.css";
function Header(props) {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Logout());
  };
  return (
    <div className={header.header}>
      <h3>Redux Auth</h3>
      {props.display && (
        <ul>
          <li>My Product</li>
          <li>My Sales</li>
          <li>
            <button onClick={handleSubmit}>Logout</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
