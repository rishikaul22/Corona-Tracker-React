import React, { useContext, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import CoronaState from './context/corona/CoronaState';
import CoronaContext from './context/corona/coronaContext';
import CardView from './components/CardView';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Helpline from './pages/Helpline';

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
      <Router>
        <div className='App'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/helpline' component={Helpline} />
          </Switch>
          {/* <Card title='Total Cases' value={confirmed} />
        <Card title='Recovered' value={recovered} />
        <Card title='Deaths' value={deaths} />
        <Card title='Active' value={active} /> */}

          <Footer />
        </div>
      </Router>
    </CoronaState>
  );
};

export default App;
