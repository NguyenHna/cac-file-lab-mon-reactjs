const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const InAction = () => {
  return {
    type: INCREMENT,
  };
};

const DeAction = () => {
  return {
    type: DECREMENT,
  };
};
export { INCREMENT, DECREMENT, InAction, DeAction };
