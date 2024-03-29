import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import CoronaContext from '../context/corona/coronaContext';


const NavBar = () => {
  const coronaContext = useContext(CoronaContext);
  const { modeDark, setDarkMode, setLightMode } = coronaContext;
  return (
    <Fragment>
      <nav>
        <div
          className='nav-wrapper'
          style={{
            backgroundImage: !modeDark ? 'linear-gradient(19deg,#0067a1,#303f9f)' : 'linear-gradient(19deg,#101010,#101010)'
          }}
        >
          <div className='brand-logo left'>
            <i className='large material-icons'>place</i>
            <strong>Corona-Tracker</strong>
          </div>

          <ul className='right'>

            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/helpline'>Helpline</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
