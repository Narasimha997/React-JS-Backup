import React, { Component } from 'react';
import Children from './children in class';

function Parent(){
    let name="tony";
    let email="nkfbsckjnc@gmail.com"
    return(
        <div>
            <Children name={name} email={email}/>
        </div>
    )
}
export default Parent