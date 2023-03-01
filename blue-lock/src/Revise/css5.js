import React from "react";
import './css2.css'
import Styles from './css3.module.css'
import Ignite from "./css4";
function Module(){
    return(
        <div>
            <h1 className="alone">No one</h1>
            <h1 className={Styles.one}>feeling One</h1>
            <Ignite/>
        </div>
    )
}
export default Module