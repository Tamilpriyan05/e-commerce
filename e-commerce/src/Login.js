import React from "react";


class Login extends React.Component{

     constructor(props){
        super(props)
        this.state={
            login:true,
            signup:true,
        }
     }
      
     login=()=>{
        this.props.loginData(this.state.login);
     }
       
     signup=()=>{
        this.props.signupData(this.state.signup);
     }
       
    render(){
        return(
            <>
             <div>
                <span onClick={this.login}>LOGIN</span>/<span onClick={this.signup}>SIGNUP</span>
                
             </div>
            </>
        )
    }
}

export default Login;