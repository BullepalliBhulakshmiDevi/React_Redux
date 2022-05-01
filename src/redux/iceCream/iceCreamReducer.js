import { BUY_ICECREAM } from "./iceCreamTypes"

const initialiceCreamState={
    numberOfIceCreams:20,
}
export const iceCreamReducer=(state=initialiceCreamState,action)=>{
     switch(action.type){
         case BUY_ICECREAM:
             return{
                 ...state,
                 numberOfIceCreams:state.numberOfIceCreams-1,
             }
             default: return state
     }
    
}
export default iceCreamReducer;