import React from "react";
import Person from "./four";
function Listthree (){
    const persons=[
        {id:1,name:"one",loc:"AP"},
        {id:2,name:"two",loc:"TN"},
        {id:3,name:"three",loc:"KA"}
    ]
    const personList=persons.map(person => <Person key={person.name} person={person} />)
    return <div>{personList}</div>
}
export default Listthree