import React from "react";
function Person({person}){
    return (
        <div>
            <h2>My name is {person.name}.My ID no. is {person.id}. I am from {person.loc}</h2>
        </div>
    )
}
export default Person