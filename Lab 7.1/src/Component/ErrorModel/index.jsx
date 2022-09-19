import Card from "../Card";
import modal from "../../Styles/ErrorModal.module.css";

function ErrorModel({ title, message, onConfirm }) {
  return (
    <>
      <Card className="">
        <div className={modal.header}>
          <h2>{title}</h2>
        </div>
        <div className={modal.content}>
          {message}
          <button className={modal.action} onClick={onConfirm}>
            Okay
          </button>
        </div>
      </Card>
    </>
  );
}

export default ErrorModel;
