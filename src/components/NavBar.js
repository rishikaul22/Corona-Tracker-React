import React, { Fragment, useContext, useEffect } from 'react';
import CoronaContext from '../context/corona/coronaContext';
import Spinner from './Spinner';
const NavBar = () => {
  const coronaContext = useContext(CoronaContext);
  const { data, getStats, loading } = coronaContext;

  useEffect(() => {
    getStats();

    // eslint-disable-next-line
  }, []);
  console.log();
  console.log();

  return (
    <Fragment>
      <nav>
        <div class='nav-wrapper'>
          <div class='brand-logo'>Logo</div>
          <a href='#' data-target='mobile-demo' class='sidenav-trigger'>
            <i class='material-icons'>menu</i>
          </a>
          <ul class='right hide-on-med-and-down'>
            <li>
              <a href='sass.html'>SAss</a>
            </li>
            <li>
              <a href='badges.html'>Components</a>
            </li>
            <li>
              <a href='collapsible.html'>Javascript</a>
            </li>
            <li>
              <a href='mobile.html'>Mobile</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class='sidenav' id='mobile-demo'>
        <li>
          <a href='sass.html'>Sass</a>
        </li>
        <li>
          <a href='badges.html'>Components</a>
        </li>
        <li>
          <a href='collapsible.html'>Javascript</a>
        </li>
        <li>
          <a href='mobile.html'>Mobile</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavBar;
