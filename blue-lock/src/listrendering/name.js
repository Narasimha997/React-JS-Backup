import React from "react";
import Person from "./four";
function Name (){
    const persons=[
        {id:1,name:"one",loc:"AP"},
        {id:2,name:"two",loc:"TN"},
        {id:3,name:"three",loc:"KA"}
    ]
    const personList=persons.map(person => <Person person={person}/>)
    return <div>{personList}</div>
}
export default Name