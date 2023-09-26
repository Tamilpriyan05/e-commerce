import React from "react";
import { Boatdata } from "./Boatdata.js";

import "./Boat.css";
import boatlogo from "./Images/Boat/blogo.png";

class Boat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Arryobj: Boatdata,
    };
  }

  addvaule(item) {
    this.setState((prevState) => ({
      Arryobj: prevState.Arryobj.map((val) => {
        console.log();
        if (item.bname == val.bname) {
          return {
            ...val,
            q: val.q + 1,
          };
        } else {
          return val;
        }
      }),
    }));
  }

  removevaule(item) {
    this.setState((prevState) => ({
      Arryobj: prevState.Arryobj.map((val) => {
        if (item.bname == val.bname && val.q > 0) {
          return {
            ...val,
            q: val.q - 1,
          };
        } else {
          return val;
        }
      }),
    }));
  }
  tocart = (item) => {
    console.log(item)
    let sum = 0,
      sum1 = 0;
    this.state.Arryobj.forEach((val) => {
      if (val.q > 0) {
        sum1 = 1;
        sum = sum + sum1;
        sum1 = 0;
      }
    });
    let popupb = this.state.Arryobj.map((val) => {
      if(val.bname.includes(item)){

     
      return (
        <>
          <div>
            <img src={val.img}></img>
            <h2>{val.bname}</h2>
            <p>{val.price}</p>
          </div>
        </>
      ); }
    });

    if (sum > 0) {
      this.props.topopupb(popupb);
      this.props.toheader(sum);
    }
  };

  render() {
    let boatcard = this.state.Arryobj.map((val) => {
      return (
        <>
          <div className="cardbox">
            <img className="cardimg" src={val.img}></img>
            <h3>{val.bname}</h3>
            <p>MRP:{val.price}</p>
            <p>{val.oprice}</p>
            <span>{val.discount}</span>
            <div>
              <button onClick={() => this.addvaule(val)}>+</button>
              <span>{val.q}</span>
              <button onClick={() => this.removevaule(val)}>-</button>
            </div>
            <button>{val.order}</button>
            <button onClick={()=>{this.tocart(val.bname)}}>{val.cart}</button>
          </div>
        </>
      );
    });

    return (
      <>
        <div className="container">
          <div className="box">
            <div className="pagelogo">
              <img src={boatlogo} height={110} width={300}></img>
            </div>
            <div className="flex allcard">{boatcard}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Boat;
