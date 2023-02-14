import React from 'react'

function Children(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>Greet Parent</button>  */}
        {/* Creating Arrow function in the onClick and Passing parameter to the function */}
        {/* We are sending data from Children component to Parent component as a parameter and receving as parameter */}
        <button onClick={()=>{props.greetHandler("Child")}}>Greet Parent</button>
    </div>
  )
}
export default Children