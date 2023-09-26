import React from "react";
import { Route, Router, Routes, Link } from "react-router-dom";
import headphonelogo from "./Images/logo.png";
import "./Mainpage.css";
import "./Animation.css";
import Homepage from "./Homepage";
import Boat from "./Boat";
import Skullcandy from "./Skullcandy";
import Sony from "./Sony";
import Jbl from "./Jbl";
import Cart from "./Cart";
import Popup from "./Popup";
import Login from "./Login";
import Loginpopup from "./Loginpopup";
import Signup from "./Signup";
import "./Alldata.css"

class Headerpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      status: false,
      login: false,
      signup: false,
      popupb: "",
      popupsc: "",
      popups: "",
      popupj: "",
    };
  }

  getdata = (num) => {
    this.setState({ sum: num  });
  };
  StatusData = (popup, login, signup) => {
    this.setState({ status: popup });
    this.setState({ login: login });
    this.setState({ signup: signup });
  };
  loginstatusdata = (login) => {
    this.setState({ login: login });
  };
  signupstatusdata = (signup) => {
    this.setState({ signup: signup });
  };
  getpopb = (b) => {
    this.setState({ popupb: b });
    
  };
  getpopsc = (sc) => {
    this.setState({ popupsc: sc });
  };
  getpops = (s) => {
    this.setState({ popups: s });
  };
  getpopj = (j) => {
    this.setState({ popupj: j });
  };

  render() {
    return (
      <>
        <div>
          {this.state.status && (
            <Popup
              sendpopb={this.state.popupb}
              sendpopsc={this.state.popupsc}
              sendpops={this.state.popups}
              sendpopj={this.state.popupj}
              setData={this.StatusData}
            />
          )}

          {this.state.login && <Loginpopup setData={this.StatusData} />}
          {this.state.signup && <Signup setData={this.StatusData} />}

          <div className="headerpading bgclr">
            <header className="flex spacearound header">
              <div className="flex width">
                <img className="logo" src={headphonelogo} height={80}></img>
                <h1>ASTA (Headphones)</h1>
              </div>
              <div className="headerlink width">
                <ul className="flex spacebetween">
                  <li>
                    <Link to="/Homepage.js">HOME</Link>
                  </li>
                  <li>
                    <Link to="/Boat.js">BOAT</Link>
                  </li>
                  <li>
                    <Link to="./Skullcandy.js">Skullcandy</Link>
                  </li>
                  <li>
                    <Link to="./Sony.js">SONY</Link>
                  </li>
                  <li>
                    <Link to="./Jbl.js">JBL</Link>
                  </li>
                  <li>
                    <Cart setData={this.StatusData} send={this.state.sum} />
                  </li>

                  <li>
                    <span>
                      <Login
                        loginData={this.loginstatusdata}
                        signupData={this.signupstatusdata}
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </header>
          </div>

          <Routes>
            <Route path="/Homepage.js" element={<Homepage />}></Route>
            <Route
              path="/Boat.js"
              element={<Boat toheader={this.getdata} topopupb={this.getpopb} />}
            ></Route>
            <Route
              path="/Skullcandy.js"
              element={
                <Skullcandy toheader={this.getdata} topopupsc={this.getpopsc} />
              }
            ></Route>
            <Route
              path="/Sony.js"
              element={<Sony toheader={this.getdata} topopups={this.getpops} />}
            ></Route>
            <Route
              path="/Jbl.js"
              element={<Jbl toheader={this.getdata} topopupj={this.getpopj} />}
            ></Route>
          </Routes>
        </div>
      </>
    );
  }
}

export default Headerpage;
