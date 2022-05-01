import React from "react"
import {connect} from "react-redux";
import { useState } from "react";
import {buyCake} from "../redux";
function NewCakeContainer(props){
    const [number,setNumber]=useState(1);
    return(
        <div>
            <h1>Number of cakes-{props.numOfCakes}</h1>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buyCake(number)}>Buy {number} Cakes</button>
          
        </div>
    )
}
const mapStatetoProps=state=>{
    return{
        numOfCakes:state.cake.numberOfCakes,
    }
}

const mapDispatchtoProps=dispatch=>{
    return{
        buyCake:number=>dispatch(buyCake(number))
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(NewCakeContainer)