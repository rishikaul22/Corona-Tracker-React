import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer class='page-footer grey darken-4'>
        <div class='container'>
          <div class='row'>
            <div class='col l6 s12'>
              <h5 class='white-text'>Made by:</h5>
              <p class='grey-text text-lighten-4'>Rishi Kaul & Viraj Shah</p>
            </div>
            <div class='col l4 offset-l2 s12'>
              <h5 class='white-text'>Insta & Github ID's</h5>
              <ul>
                <li>
                  <a class='grey-text text-lighten-3' href='#!'>
                    Rishi's Instagram
                  </a>
                </li>
                <li>
                  <a class='grey-text text-lighten-3' href='#!'>
                    Rishi's GitHub
                  </a>
                </li>
                <li>
                  <a class='grey-text text-lighten-3' href='#!'>
                    Viraj's Instagram
                  </a>
                </li>
                <li>
                  <a class='grey-text text-lighten-3' href='#!'>
                    Viraj's GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class='footer-copyright'></div>
      </footer>
    </div>
  );
};

export default Footer;
