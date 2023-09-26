import React from "react";
import "./Popup.css";

class Popup extends React.Component {
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

        <div className="popup">
          <div className="p-c">
            <p onClick={this.close} className="cancel">
              <i class="fa-solid fa-circle-xmark"></i>
            </p>
            <div className="maxhw">
              {this.props.sendpopb}
              {this.props.sendpopsc}
              {this.props.sendpops}
              {this.props.sendpopj}
            </div>
            
          </div>
        </div>

        
      </>
    );
  }
}

export default Popup;
