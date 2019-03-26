import React from 'react';
import {Link} from 'react-router-dom';
import {Keys} from '../config/Keys'

class GoogleAuth extends React.Component{
    state={ isSignedIn:null };

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
                //console.log("state",this.state.isSignedIn)
               
            })
        });   
    }
    
    renderAuthButton(){
        if(this.state.isSignedIn===null){
            return <div>I don't know if we are signed in</div>
        }else if(this.state.isSignedIn){
            return <div>I am signed in</div>
        }else{
            return <div>Not sigend in</div>
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