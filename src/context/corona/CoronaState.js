import React, { useReducer } from "react";
import axios from "axios";
import CoronaContext from "./coronaContext";
import CoronaReducer from "./coronaReducer";
import { GET_STATS, SET_LOADING, GET_HELPLINE, GET_DAILY_DATA, SET_LIGHT_MODE, SET_DARK_MODE } from "../types";

const CoronaState = props => {
  const initialState = {
    data: {},
    statewise: [],
    help: [],
    history: [],
    loading: true,
    modeDark: localStorage.getItem("modeDark") === null ? false : localStorage.getItem("modeDark") === "false" ? false : true
  };

  const [state, dispatch] = useReducer(CoronaReducer, initialState);


  // USUAL API CHANGE
  const getStats = async () => {
    const res = await axios.get(
      // "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
      // "https://api.covid19india.org/data.json"
      "https://data.covid19india.org/data.json"
      // "https://data.covid19india.org/v4/min/data.min.json",
      // "https://data.covid19india.org/v4/min/timeseries.min.json"
    );
    //console.log(state.loading);
    console.log(res.data);
    dispatch({
      type: GET_STATS,
      payload: res.data
    });
  };

  const getHelp = async () => {
    const res = await axios.get("https://api.rootnet.in/covid19-in/contacts");

    dispatch({
      type: GET_HELPLINE,
      payload: res.data
    });
  };

  const getDailyData = async () => {
    const res = await axios.get(
      "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history"
    );
    dispatch({
      type: GET_DAILY_DATA,
      payload: res.data
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });
  const setLightMode = () => {
    dispatch({ type: SET_LIGHT_MODE })
  }
  const setDarkMode = () => {
    dispatch({ type: SET_DARK_MODE })
  }

  return (
    <CoronaContext.Provider
      value={{
        data: state.data,
        statewise: state.statewise,
        loading: state.loading,
        help: state.help,
        history: state.history,
        modeDark: state.modeDark,
        getStats,
        getHelp,
        getDailyData,
        setLoading,
        setLightMode,
        setDarkMode
      }}
    >
      {props.children}
    </CoronaContext.Provider>
  );
};

export default CoronaState;
