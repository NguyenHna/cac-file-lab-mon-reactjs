import { DECREMENT, INCREASEBY10, INCREMENT, LOGIN, LOGOUT } from "./action";

const initState = {
  login: false,
  init: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        init: state.init + 1,
      };
    case INCREASEBY10:
      return {
        ...state,
        init: state.init + 10,
      };
    case DECREMENT:
      return {
        ...state,
        init: state.init - 1,
      };
    case LOGIN:
      return {
        ...state,
        login: true,
      };
    case LOGOUT:
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
};

export default reducer;
