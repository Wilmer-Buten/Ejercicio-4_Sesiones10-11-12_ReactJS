import React, { useState } from 'react';

const DynamicBox = () => {

  const [color, setColor] = useState('rgb(0,0,0)');
  const [inter, setInter] = useState('');

  
  const styles = {

    'backgroundColor': `${color}`,
    'width': '255px',
    'height': '255px'
  }

  const generateColor = () => {

    const interval = setInterval(() => {
      setColor(`rgb(
          ${Math.floor(Math.random() * 256)
        },${Math.floor(Math.random() * 256)
        },${Math.floor(Math.random() * 256)
        })`);
      setInter(interval);

    }, 300)
  }
  const clearIn = () => {
    clearInterval(inter);
  }

  return (
    <div onDoubleClick={clearIn} onMouseOut={clearIn} onMouseOver={generateColor} style={styles}></div>
  )
}

export default DynamicBox;