// Passing Pros & state
import React from "react";
import './css1.css'
function Gripper(props){
    let classo=props.red?'reddon':""
    return(
        <div>
        
            <h1 className={classo}>Orange</h1>
        </div>
    )
}
export default Gripper