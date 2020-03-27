import React, { useContext, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import CoronaState from './context/corona/CoronaState';
import CoronaContext from './context/corona/coronaContext';

const App = () => {
  // const coronaContext = useContext(CoronaContext);
  // const { total, getStats } = coronaContext;
  // const { confirmed, recovered, deaths, active } = total;
  // useEffect(() => {
  //   getStats();
  //   // eslint-disable-next-line
  // }, []);
  return (
    <CoronaState>
      <div className='App'>
        <NavBar />
        {/* <Card title='Total Cases' value={confirmed} />
        <Card title='Recovered' value={recovered} />
        <Card title='Deaths' value={deaths} />
        <Card title='Active' value={active} /> */}
      </div>
    </CoronaState>
  );
};

export default App;
