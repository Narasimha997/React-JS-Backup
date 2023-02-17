import React from "react";
function Listtwo(){
    const names=['one','two','three']
    const nameList=names.map(name=><h2>{name}</h2>)
    return <div>{nameList}</div>
}
export default Listtwo