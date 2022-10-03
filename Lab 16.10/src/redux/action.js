const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREASEBY10 = "INCREASEBY10";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const InAction = () => {
  return {
    type: INCREMENT,
  };
};

const Increaseby10 = () => {
  return {
    type: INCREASEBY10,
  };
};

const DeAction = () => {
  return {
    type: DECREMENT,
  };
};

const Login = () => {
  return {
    type: LOGIN,
  };
};

const Logout = () => {
  return {
    type: LOGOUT,
  };
};

export {
  INCREMENT,
  INCREASEBY10,
  DECREMENT,
  LOGIN,
  LOGOUT,
  InAction,
  Increaseby10,
  DeAction,
  Login,
  Logout,
};
