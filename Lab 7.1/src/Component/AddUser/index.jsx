import Card from "../Card";
import Button from "../Button";
import { useCallback, useRef, useState } from "react";
import add from "../../Styles/AddUser.module.css";
import ErrorModel from "../ErrorModel";

function AddUser({ setList }) {
  //hooks
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  //func
  const handleChangeInput = (e) => {
    if (e.target.id === "fullname") {
      setName(e.target.value);
    } else if (e.target.id === "age") {
      setAge(e.target.value);
    } else {
      console.log("Error");
    }
  };

  const handleClickForm = () => {
    if ((name === ""|| age === " ")) {
      setError({ title: "Ivalid Name", message: "Nhập đầy đủ thông tin" });
      return;
    }
    if (age < 1) {
      setError({ title: "Ivalid age", message: "Tuổi lớn hơn 0" });
      return;
    }
    setList((prev) => {
      return [
        ...prev,
        {
          id: Math.random(),
          fullname: name,
          age,
        },
      ];
    });
  };

  const handleClickCloseModal = () => {
    setError(null);
  };
  return (
    <>
      <Card className={add.input}>
        <form>
          <label>User Name</label>
          <input
            type="text"
            id="fullname"
            value={name}
            onChange={handleChangeInput}
          />
          <label>Age (Years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleChangeInput}
          />
          <Button onClick={handleClickForm}>Add User</Button>
        </form>
      </Card>
      {error === null ? (
        <></>
      ) : (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={handleClickCloseModal}
        />
      )}
    </>
  );
}

export default AddUser;
