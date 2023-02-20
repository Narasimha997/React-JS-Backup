import React from "react";
const Hi=()=>{
    // Without JSX react application to return something it provides React.createElement()
    // It access minimum three parameters into it
    // First parameter is must be tag as string
    // Second parameter is basically is an object of key value pairs that wil be applied to the element
    // Third parameter is the children for the HTML element which means it is children for the first parameter (like message)
    // return React.createElement('div',null,"Surpass Your Limits Right now, Right here")      // Here the output show on the browser normally because we didnt specify any other tag to the message 
    // if we try to specify any tag along with the message
    // return React.createElement('div',null,'<h1>Surpass Your Limits Right now, Right here</h1>')
    // In the output it shows along with the message at that time what we have to do is follow the following next example
    // return React.createElement('div',null,React.createElement('h1',null,"Surpass Your Limits Right now, Right here"))
    // Passing object to the second parameter 
    return React.createElement('h1',{id:1,name:"luffy"},"Message")
}
export default Hi