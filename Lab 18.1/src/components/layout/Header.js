import { NavLink } from "react-router-dom";
import header from "./MainNavigation.module.css";
function Header() {
  return (
    <div className={header.header + " " + header.nav}>
      <ul>
        <li className={header.logo}>Great Quotes</li>
        <li>
          <NavLink className="" to="/quotes">
            All quote
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="/new-quote">
            Add quote
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
