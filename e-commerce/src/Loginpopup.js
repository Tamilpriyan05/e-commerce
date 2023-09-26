import React from "react";
import "./Loginpopup.css";
import logo from "./Images/logo.png";

class Loginpopup extends React.Component {
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
            <p onClick={this.close} className="logincancel">
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
              Don't have an account?<a>Create a free account</a>
            </p>
            <form className="loginform">
              <div>
                <label className="loginlable">Enter username</label>
                <input
                  className="logininput"
                  type="text"
                  placeholder="Enter Username"
                ></input>
              </div>
              <div>
                <div className="forgot">
                  <label className="loginlable">Enter Password</label>
                  <p>Forgot password?</p>
                </div>

                <input
                  className="logininput"
                  type="password"
                  placeholder="Enter Password"
                ></input>
              </div>
              <div className="logbtn">
                <button type="reset" className="loginbutton">
                  Reset
                </button>
                <button type="sumbit" className="loginbutton">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Loginpopup;
