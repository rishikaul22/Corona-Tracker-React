import React, { useReducer } from 'react';
import axios from 'axios';
import CoronaContext from './coronaContext';
import CoronaReducer from './coronaReducer';
import { GET_STATS, SET_LOADING, GET_HELPLINE } from '../types';

const CoronaState = props => {
  const initialState = {
    data: {},
    statewise: [],
    loading: false
  };

  const [state, dispatch] = useReducer(CoronaReducer, initialState);

  const getStats = async () => {
    setLoading();

    const res = await axios.get(
      'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise'
    );
    //console.log(state.loading);
    //console.log(res.data);
    dispatch({
      type: GET_STATS,
      payload: res.data
    });
  };

  const getHelp = async () => {
    setLoading();

    const res = await axios.get('https://api.rootnet.in/covid19-in/contacts');

    dispatch({
      type: GET_HELPLINE,
      payload: res.data
    });
    console.log(res.data);
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CoronaContext.Provider
      value={{
        data: state.data,
        statewise: state.statewise,
        loading: state.loading,
        getStats,
        getHelp,
        setLoading
      }}
    >
      {props.children}
    </CoronaContext.Provider>
  );
};

export default CoronaState;
