import React from "react";
import "./Cart.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }

  show = () => {
    this.props.setData(this.state.status);
  };

  render() {
    return (
      <>
        <div className="cart">
          <p onClick={this.show} className="carticon">
            <i class="fa-solid fa-cart-shopping"></i>
          </p>
          <p onClick={this.show} className="cartcircle">
            {this.props.send}
          </p>
        </div>
      </>
    );
  }
}

export default Cart;
