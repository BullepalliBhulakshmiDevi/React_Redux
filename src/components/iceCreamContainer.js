import React from "react"
import {connect} from "react-redux";
import {buyIceCream} from "../redux";
function iceCreamContainer(props){
    return(
        <div>
            <h1>Number of icecreams-{props.numberOfIceCreams}</h1>
            <button onClick={props.buyIceCream}>BuyIceCream</button>
          
        </div>
    )
}
const mapStatetoProps=state=>{
    return{
        numberOfIceCreams:state.iceCream.numberOfIceCreams,
    }
}

const mapDispatchtoProps=dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(iceCreamContainer)