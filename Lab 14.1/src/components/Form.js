import { useState } from "react";
import form from "./Form.module.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const validate = () => {
    if (name === "") return { ok: false, message: "chua dien ten!" };
    if (email === "") return { ok: false, message: "chua dien email" };
    if (!email.includes("@"))
      return { ok: false, message: "dien email roi nhung ma chua dung" };
    return { ok: true };
  };

  return (
    <form className={form.form}>
      <label>Your Name</label>
      <input onChange={(e) => setName(e.target.value)} />
      {!validate().ok ? <label className={form.error}>{validate().message}</label> : <></>}
      <label>Your E-mail</label>
      <input onChange={(e) => setEmail(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}

export default Form;
