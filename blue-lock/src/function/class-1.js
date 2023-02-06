import React from "react";
function Ko(){
    const[message,setMessage]=React.useState('hello,world');
    return(
        <h1>{message}</h1>
    )
}
export default Ko