import { useSelector, useDispatch } from "react-redux";
import { DeAction, InAction } from "../redux/action";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={() => dispatch(InAction())}>Increment</button>
        <button onClick={() => dispatch(DeAction())}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
