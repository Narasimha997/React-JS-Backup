// Passing Pros & state
import React from "react";
import './css1.css'
function Pokemon(props){
    let berri=props.red?'reddon':''
    return(
        <div>
        
            <h1 className={`${berri} orangeon`}>Orange</h1>
        </div>
    )
}
export default Pokemon