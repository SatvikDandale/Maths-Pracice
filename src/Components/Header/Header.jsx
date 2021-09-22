import React from 'react';
import './Header.css';

export default () => {
  return (
    <div className="header">
      <div className="header_left">
        <p>Maths Practice</p>
      </div>
      <div className="header_right">
        <p>Date: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};
