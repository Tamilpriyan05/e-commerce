import React from "react";
import boatlogo from "./Images/Boat/blogo.png";
import skullcandylogo from "./Images/Skullcandy/skullcandylogo.png";
import sonylogo from "./Images/sony/sonylogo.png";
import jbllogo from "./Images/ubl/jbllogo.png";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <div className="container homepage">
          <div className="">
            <div className="flex spaceevenly">
              <a className="tr1" href="/Boat.js" target="_blank">
                <div className="circlebox ">
                  <img src={boatlogo} width={150} height={80}></img>
                  <div className="circleimg boat"></div>
                  <p>UP TO 80% Offer</p>
                </div>
              </a>

              <a className="tr2" href="/Skullcandy.js">
                <div className="circlebox ">
                  <img src={skullcandylogo} width={180} height={100}></img>
                  <div className="circleimg skullcandy"></div>
                  <p>UP TO 80% Offer</p>
                </div>
              </a>

              <a className="tr3" href="/Sony.js">
                <div className="circlebox ">
                  <img src={sonylogo} width={150} height={100}></img>
                  <div className="circleimg sony"></div>
                  <p>UP TO 80% Offer</p>
                </div>
              </a>

              <a className="tr4" href="/Boat.js">
                <div className="circlebox ">
                  <img src={jbllogo} width={130} height={80}></img>
                  <div className="circleimg ubl"></div>
                  <p>UP TO 80% Offer</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
