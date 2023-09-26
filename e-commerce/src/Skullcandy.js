import React from "react";
import { Skullcandydata } from "./Skullcandydata";
import skullcandylogo from "./Images/Skullcandy/skullcandylogo.png";

class Skullcandy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Arryobj: Skullcandydata,
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

  tocart = () => {
    let sum = 0,
      sum1 = 0;
    this.state.Arryobj.forEach((val) => {
      if (val.q > 0) {
        sum1 = 1;
        sum = sum + sum1;
        sum1 = 0;
      }
    });

    let popupsc = this.state.Arryobj.map((val) => {
      return (
        <>
          <div>
            <img src={val.img}></img>
            <h2>{val.bname}</h2>
            <p>{val.price}</p>
          </div>
        </>
      );
    });
    if (sum > 0) {
      this.props.topopupsc(popupsc);
      this.props.toheader(sum);
    }
  };

  render() {
    let skullcandycard = this.state.Arryobj.map((val) => {
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
            <button onClick={this.tocart}>{val.cart}</button>
          </div>
        </>
      );
    });

    return (
      <>
        <div className="container">
          <div className="box">
            <div className="pagelogo">
              <img src={skullcandylogo} height={140} width={350}></img>
            </div>
            <div className="flex allcard">{skullcandycard}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Skullcandy;