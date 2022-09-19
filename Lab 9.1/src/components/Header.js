import header from "./Layout/Header.module.css";
import image from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <div>
      <div className={header.header}>
        <h3>ReactMeals</h3>
        <HeaderCartButton />
      </div>
      <div className={header.mainimage}>
        <img src={image} />
      </div>
    </div>
  );
}

export default Header;
