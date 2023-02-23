import React from 'react';
// import Namestyle from './css/Namestyle'
import Namestyle1 from './css/Namestyle passingprops';
// import Names from './listrendering/indexaskey/Names'
// import One from './Revise/one'
import Parent from './Revise/index-1';
// import Two from './Revise/two'
import './css/appStyle.css';
import Styles from './css/appStyle.module.css';

function App() {
  return (
    <div>
      {/* <One/>
      <Two/>*/}
      <Parent />
      {/* <Names/> */}
      {/* <Namestyle/> */}
      {/* <h1 className='resolve'> Error</h1>
      <h1 className={Styles.reject}> Success</h1>
      <Namestyle1 primary={true}/>
   */}
    </div>
  );
}

export default App;
