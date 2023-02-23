import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

import Children from './children in class';

function Parent() {
  let name = 'tony';
  let email = 'nkfbsckjnc@gmail.com';
  return (
    <div>
      <h1>
        {' '}
        <Children name={name} email={email} />
      </h1>
    </div>
  );
}

export default Parent
// const ramp = ReactDOM.createRoot(document.getElementById('root'));
// ramp.render(<Parent name={Parent.name} email={Parent.email} />);
