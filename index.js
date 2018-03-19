document.getElementById("title").innerHTML="This is a demo using parcel.js";
import React from "react";
import ReactDOM from "react-dom";

class Parcel extends React.Component {
  render() {
    return <div>This is a demo using parcel.js with {this.props.name}</div>;
  }
}
var app = document.getElementById("app");
ReactDOM.render(<Parcel name="React" />, app);
