import React from 'react';
import { useSpring, animated } from 'react-spring';
var numberToWords = require('number-to-words');




const Card = ({ title, value, color1, color2, degrees }) => {
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  const fade = useSpring({
    config: {
      duration: 500
    },
    from: {
      opacity: 0
      //padding: 200
    },
    to: {
      opacity: 1
      //padding: 0
    }
  });

  const increment = useSpring({
    from: {
      number: 0
    },
    number: Number(value)
  });

  return (
    <animated.div className='container' style={fade}>
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
              <animated.strong>
                {increment.number.interpolate(x => Math.floor(x))}
              </animated.strong>
              {/* {value} */}
            </span>
            <p className='lead'>{capitalize(numberToWords.toWords(value))}</p>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Card;
