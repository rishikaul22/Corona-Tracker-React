import React from 'react';

const Card = props => {
  return (
    <div className='container'>
      <div class='row'>
        <div class='col s12 m12 l3 xl3'>
          <div class='card black darken-1'>
            <div class='card-content white-text'>
              <span class='card-title'>{props.title}</span>
              <p>{props.value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
