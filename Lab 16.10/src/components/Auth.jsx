import { useState } from "react";
import { useDispatch } from "react-redux";
import { Login } from "../redux/action";
import auth from "./Auth.module.css";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      window.alert("Nhap day du thong tin dang nhap!");
    } else {
      dispatch(Login());
    }
  };
  return (
    <form className={auth.auth + " " + auth.control}>
      <label>EMAIL</label>
      <input onChange={(e) => setEmail(e.target.value)} />
      <label>PASSWORD</label>
      <input onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Login</button>
    </form>
  );
}

export default Auth;
