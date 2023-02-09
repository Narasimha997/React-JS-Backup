import React from "react";
import Redmi from "./class&props-1";
// class Mi extends Component{
//     name="Zoro";
//     bounty="1.5billion"
//     position="Vice-Captain"
//     render(){
//         return(
//             <div>
//                 <Redmi name={this.name} bounty={this.bounty} position={this.position}/>
//             </div>
//         )
//     }
// }
function Mi (){
   let  name="Zoro";
   let  bounty="1.5billion"
   let position="Vice-Captain"
   return(
    <div>
        <Redmi name={name} bounty={bounty} position={position}/>
    </div>
   )
}
export default Mi