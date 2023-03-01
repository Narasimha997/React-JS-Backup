import React from 'react'
// import Lifecycleparent from './Lifecycle Methods/Mounting Lifecycle Methods/Lifecycleparent'
import './App.css'
import Lifecyclewheel from './Lifecycle Methods/Updating lifecycle methods/practice'
// import LifecycleA from './Lifecycle Methods/Updating lifecycle methods/LIfecyccleA'
import Button from './Revise/button'
import Inline from './Revise/css'
import Normal from './Revise/css1'
import Gripper from './Revise/css2'
import Pokemon from './Revise/css3'
import Ignite from './Revise/css4'
import Module from './Revise/css5'
import Click from './Revise/event1'
import User from './Revise/form'

function App() {
  return (
    <div className='App'>
      {/* <Lifecycleparent/> */}
      {/* <LifecycleA/> */}
      {/* <Button/>
      <Inline/>
      <Normal/>
      <Gripper red={true}/>
      <Pokemon red={false}/>
      <Ignite heading={false}/>
      <Module/>
      <Click/>
      <User/> */}
      <Lifecyclewheel/>
    </div>
  )
}

export default App