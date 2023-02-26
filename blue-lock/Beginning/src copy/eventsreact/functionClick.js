import React from "react";
function Clicked(){
   function clickHandler(){
        console.log("Button pressed");
    }
    return(
        <div>
            <button onClick={clickHandler}>Button</button>  {/* Passing handler  has function instead of string without parenthesis */}
            <button onClick={clickHandler()}>Button</button>  {/* Passing handler has a function instead of string with parenthesis. Along with parenthesis it will become a function call so before clicking button the result will be shown on the console */}
            {/* Here, The second button will be print on the console first before clicking button */}
        </div>
    )
}
export default Clicked