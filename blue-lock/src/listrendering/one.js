import React from "react";
function Listone (){
    const names=['one','two','three']
    return (
        <div>
        {
            names.map(names =><h1>{names}</h1>)
        }
        </div>
    )
   
}
export default Listone