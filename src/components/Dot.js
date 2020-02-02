import React, { Component } from "react";

export default class Blurback extends Component {
  componentDidMount() {
    const changeDiameter = e => {
      document.getElementById("chartdiv").style.left = e.pageX - 25 + "px";
      document.getElementById("chartdiv").style.top = e.pageY - 25 + "px";
    };
    const colorWhite = e => {
      // document.getElementById("chartdiv").style.width = 100 + "px";
      // document.getElementById("chartdiv").style.height = 100 + "px";
      document.getElementById("chartdiv").style.backgroundColor = "blue";
    };
    const colorBlack = e => {
      // document.getElementById("chartdiv").style.width = 50 + "px";
      // document.getElementById("chartdiv").style.height = 50 + "px";
      document.getElementById("chartdiv").style.backgroundColor = "black";
    };

    window.addEventListener("mousemove", changeDiameter);
    window.addEventListener("mousedown", changeDiameter);
    window.addEventListener("mousedown", colorBlack);
    window.addEventListener("mouseup", colorWhite);
    window.addEventListener("mousemove", changeDiameter);
  }

  render() {
    return (
      <div>
        <div className="circle" id="chartdiv" />
      </div>
    );
  }
}
