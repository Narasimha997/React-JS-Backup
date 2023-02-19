import React from "react";
// import Person from "./four";
function Listthree (){
    const persons=[
        {id:1,name:"one",loc:"AP"},
        {id:2,name:"two",loc:"TN"},
        {id:3,name:"three",loc:"KA"}
    ]
    const personList=persons.map(person => (
        <h2>My name is {person.name} My id is {person.id} & I am from {person.loc}</h2>
    ))
    return <div>{personList}</div>
}
export default Listthree