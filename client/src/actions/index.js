import {SIGN_IN,SIGN_OUT} from "./types";
export const signIn=(id)=>{
    console.log('id in action', id)
    return({
        type:SIGN_IN,
        payload:id
    })
}

export const signOut=()=>{
    return (
        {
            type:SIGN_OUT
        }
    )
}