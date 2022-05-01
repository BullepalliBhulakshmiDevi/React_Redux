import React from "react"
import {connect} from "react-redux";
import {buyCake} from "../redux";
function cakeContainer(props){
    return(
        <div>
            <h1>Number of cakes-{props.numOfCakes}</h1>
            <button onClick={props.buyCake}>BuyCakes</button>
          
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
        buyCake:()=>dispatch(buyCake())
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(cakeContainer)