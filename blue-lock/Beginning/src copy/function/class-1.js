import React from "react";
function Ko(){
    const[message,setMessage]=React.useState('hello,world');
    return(
        <div>
            <h1>{message}</h1>
            {/* <h2>{setMessage.name}</h2> */}
        </div>
    )
}
export default Ko