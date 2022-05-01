import React from "react";
import { connect } from "react-redux";
import {buyCake,buyIceCream} from "../redux";
function ItemContainer(props){
    return(
        <div>
            <h2>Item-{props.item}</h2>
            <button onClick={props.buyItem} >BuyItem</button>
        </div>
    )
}
const mapStateToProps=(state,ownProps)=>{
    const itemState=ownProps.cake?state.cake.numberOfCakes:state.iceCream.numberOfIceCreams
    return{
        item:itemState
    }
}
const mapDispatchtoProps=(dispatch,ownProps)=>{
    const dispatchFunction=ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(buyIceCream())
    return{
        buyItem:dispatchFunction
    }
}
export  default connect(mapStateToProps,mapDispatchtoProps)(ItemContainer)