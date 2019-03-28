import React from 'react';
import {Link} from 'react-router-dom';
import {Keys} from '../config/Keys'

class GoogleAuth extends React.Component{
    state={isSignedIn:null };

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:Keys.googleUserID,
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                console.log("this",this);
                console.log("signed in?",this.auth.isSignedIn.get())
                this.setState({isSignedIn:this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange);
                //console.log("state",this.state.isSignedIn)
               
            })
        });   
    }

    onAuthChange =() =>{
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }
    onSignInClick=()=>{
        this.auth.signIn();
    }

    onSignOutClick=()=>{
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.state.isSignedInClick===null){
            return null;
        }else if(this.state.isSignedIn){
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

export default GoogleAuth;