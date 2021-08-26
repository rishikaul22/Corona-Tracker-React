import {
  GET_STATS,
  SET_LOADING,
  GET_HELPLINE,
  GET_DAILY_DATA,
  SET_DARK_MODE,
  SET_LIGHT_MODE
} from "../types.js";

export default (state, action) => {
  switch (action.type) {
    case GET_STATS:
      console.log(action.payload)
      return {
        ...state,
        data: action.payload.statewise[0],
        statewise: action.payload.statewise,
        loading: false
      };
    case GET_HELPLINE:
      return {
        ...state,
        help: action.payload.data.contacts,
        loading: false
      };
    case GET_DAILY_DATA:
      return {
        ...state,
        history: action.payload.data.history,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_LIGHT_MODE:
      localStorage.setItem("modeDark", "false")
      // document.body.style = 'background: white;';
      return {
        ...state,
        modeDark: false
      }
    case SET_DARK_MODE:
      localStorage.setItem("modeDark", "true")
      // document.body.style = 'background: black;';
      return {
        ...state,
        modeDark: true
      }
    default:
      return {
        state
      };
  }
};
