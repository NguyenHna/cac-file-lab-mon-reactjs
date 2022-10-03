import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeAction, InAction, Increaseby10 } from "../redux/action";

import classes from "./Counter.module.css";

const Counter = () => {
  const [show, setShow] = useState(true);
  const counter = useSelector((state) => state.init);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    setShow(!show);
  };

  return (
    <div>
      {show && (
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={() => dispatch(InAction())}>Increment</button>
            <button onClick={() => dispatch(DeAction())}>Decrement</button>
            <button onClick={() => dispatch(Increaseby10())}>
              Increase by 10
            </button>
          </div>
        </main>
      )}
      <div className={classes.counter}>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </div>
  );
};

export default Counter;
