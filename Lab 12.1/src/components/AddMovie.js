import { useCallback, useEffect, useState } from "react";
import add from "./AddMovie.module.css";
function AddMovie() {
  const [title, setTitle] = useState("");
  const [openingText, setOpen] = useState("");
  const [release, setRelease] = useState("");

  //func
  async function handleSubmitBtn() {
    const dataSubmit = { title, openingText, release };
    if (
      dataSubmit.title !== "" &&
      dataSubmit.openingText !== "" &&
      dataSubmit.release !== ""
    ) {
      // POST DATA
      await fetch(
        "https://react-movies-4914b-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(dataSubmit),
          Headers: {
            "Content-Type": "aplication/json",
          },
        }
      );
      await console.log("POST DATA >>>>>>>");
    }
  }

  return (
    <div className={add.control}>
      <label>Title</label>
      <input onChange={(e) => setTitle(e.target.value)} />
      <label>Opening Text</label>
      <input onChange={(e) => setOpen(e.target.value)} />
      <label>Release Date</label>
      <input onChange={(e) => setRelease(e.target.value)} />
      <button onClick={handleSubmitBtn}>Add Movie</button>
    </div>
  );
}

export default AddMovie;
