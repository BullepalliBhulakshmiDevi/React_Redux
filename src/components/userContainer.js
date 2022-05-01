import React, { useEffect } from "react";
import {fetchUser} from "../redux"
import { connect } from "react-redux";
function UserContainer({userData,fetchUser}){
    useEffect(()=>{
        fetchUser()
    },[])
    return userData.loading?(
        <h2>Loading</h2>
    ):userData.error?(
        <h2>{userData.error}</h2>
    ):(
        <div>
            <h2>User List</h2>
            <div>
                {
                    userData && userData.users && userData.users.map(user=><p>{user.name}</p>)
                }
            </div>
        </div>
    )
}

const mapStatetoProps=state=>{
    return{
        userData:state.user,
    }
}

const mapDispatchtoProps=dispatch=>{
    return{
        fetchUser:()=>dispatch(fetchUser())
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(UserContainer)