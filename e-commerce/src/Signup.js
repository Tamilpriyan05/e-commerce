import React from "react";
import "./Signup.css";
import logo from "./Images/logo.png";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }
  close = () => {
    this.props.setData(this.state.status);
  };
  render() {
    return (
      <>
        <div className="loginpopup">
          <div className="loginpage">
            <p onClick={this.close} className="cancel">
              <i class="fa-solid fa-circle-xmark"></i>
            </p>
            <div className="logincentre">
              <div>
                <img
                  className="loginlogo"
                  src={logo}
                  width={80}
                  height={80}
                ></img>
                <h2 className="loginheading">ASTA</h2>
              </div>
            </div>
            <p className="donac">
              You have an account?<a>Login</a>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
