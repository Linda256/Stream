import React from 'react';
import {connect} from 'react-redux';

import {Keys} from '../config/Keys';
import {signIn, signOut} from '../actions';


class GoogleAuth extends React.Component{

    componentDidMount(){
        console.log("props in googleAuth",this.props);
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:Keys.googleUserID,
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                console.log("this",this);
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });   
    }

    onAuthChange =(isSignedIn) =>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }
    onSignInClick=()=>{
        this.auth.signIn();
    }

    onSignOutClick=()=>{
        this.auth.signOut();
    }

    renderAuthButton(){
        console.log("props:",this.props)
        if(this.props.isSignedIn===null){
            return null;
        }else if(this.props.isSignedIn){
            return(
                <button className="ui red google button" 
                    onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out</button>
            ) 
        }else{
            return <button className="ui red googel button"
                onClick={this.onSignInClick}>
                Sign In with Google</button> 
        }
    }

    render(){
        return(
            <div> 
                {this.renderAuthButton()}
            </div>
        )
    }
    
}
const mapStateToProps=(state)=>{
    console.log("state in googleAuth",state)
    return {
        isSignedIn:state.auth.isSignedIn,
        userId:state.auth.userId
    }

}
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);