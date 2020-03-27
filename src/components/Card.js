import React from 'react';

const Card = ({ title, value, color1, color2, degrees }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div
          className='card z-depth-3'
          style={{
            backgroundImage: `linear-gradient(${degrees}deg,${color1}, ${color2})`
          }}
        >
          <div className='card-content white-text center'>
            <span className='card-title'>{title}</span>
            <span className='white-text' style={{ fontSize: '35px' }}>
              <strong>{value}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
