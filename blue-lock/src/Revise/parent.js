import React, { Component } from 'react';
import Children from './children';

class Parent extends Component {
    name='name'
    email='email123@gmail.com'
    render() {
        return (
            <div>
                <Children name={this.name} email={this.email} />
            </div>
        )
    }
}

export default Parent;