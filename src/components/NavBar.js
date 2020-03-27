import React, { Fragment, useContext, useEffect } from "react";
import CoronaContext from "../context/corona/coronaContext";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const NavBar = () => {
  const coronaContext = useContext(CoronaContext);
  const { data, getStats, getHelp, loading } = coronaContext;
  useEffect(() => {
    getStats();
    getHelp();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <nav>
        <div
          className='nav-wrapper'
          style={{
            backgroundImage: "linear-gradient(19deg,#0067a1,#303f9f)"
          }}
        >
          <div className='brand-logo center' style={{ fontSize: "40px" }}>
            Corona-Tracker
          </div>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/helpline'>Helpline</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <a href='sass.html'>Sass</a>
        </li>
        <li>
          <a href='badges.html'>Components</a>
        </li>
        <li>
          <a href='collapsible.html'>Javascript</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavBar;
