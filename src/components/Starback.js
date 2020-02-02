import React, { Component } from "react";
let stars = [];
let star = " * ";

function starfill() {
  for (let i = 0; i < 5000; i++) {
    stars.push(star);
  }
}
starfill();

export default class Starback extends Component {
  state = {
    count: 1,
    pos: 1,
    colorCount: 0,
    colors: ["blue", "green", "red", "pink", "magenta"]
  };

  handleClick = () => {
    this.setState(({ count }) => ({
      count: (count += 1)
    }));
    this.setState(({ pos }) => ({
      pos: (pos += 12)
    }));

    if (this.state.colorCount > this.state.colors.length - 2) {
      this.setState(({ colorCount }) => ({
        colorCount: 0
      }));
    } else {
      this.setState(({ colorCount }) => ({
        colorCount: (colorCount += 1)
      }));
    }
    if (this.state.count === 10) {
      alert("hello");
    }
    document.getElementById("stars").style.fontFamily = "Arial";
    document.getElementById("stars").style.fontSize = 15 + "px";
    document.getElementById("listitem").style.left = this.state.pos + "px";
    document.getElementById("listitem").style.top = this.state.pos - 5 + "px";
    document.getElementById(
      "listitem"
    ).style.backgroundColor = this.state.colors[this.state.colorCount];
    document.getElementById(
      "listitem"
    ).style.backgroundColor = this.state.colors[this.state.colorCount];
    document.getElementById("stars").style.color = this.state.colors[
      this.state.colorCount
    ];
  };
  render() {
    return (
      <div>
        <div className="aboutlist">
          <ul id="listitem" className="ul">
            <li onClick={this.handleClick}>Work</li>
            <li>School</li>
            <li>Other</li>
            <li>All</li>
            <li>{this.state.count}</li>
          </ul>
        </div>
        <div onClick={this.handleClick} className="work1">
          Grimeton Radio Station <br></br>(Radiostation in swedish) is located
          outside Varberg on the Swedish west coast. It was very important for
          Scandinavia during world war II. The long wave radio transmitter was
          during periods the only ways for Scandinavia to communicate with the
          US. It was added to the Unesco World Heritage List in 2004, with the
          statement: "Grimeton Radio Station, Varberg is an outstanding monument
          representing the process of development of communication technology in
          the period following the First World War.
        </div>
        <div id="stars" className="stars">
          {stars}
        </div>
      </div>
    );
  }
}
