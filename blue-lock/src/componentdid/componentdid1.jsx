import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import employees from "./data";
class Data extends Component{
    constructor(props){
        super(props)
        console.log("first constructor method will execute");
    }
    render(){
        console.log("second render metod will execute");
        return(
            <div>
                {/* <pre>{JSON.stringify(employees)}</pre> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                        <table className="table table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map((employee)=>{
                                        return <tr key ={employee.email}>
                                            <td>{employee.id}</td>
                                            <td>{employee.first_name}</td>    {/* List endering method */}
                                            <td>{employee.last_name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.gender}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Data