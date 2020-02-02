import React, { Component } from "react";
import Draggable from "react-draggable";
import S1 from "./../Assets/smileys1/yellow/y1.png";
import S2 from "./../Assets/smileys1/black1.png";
import S3 from "./../Assets/smileys1/black2.png";
import S4 from "./../Assets/smileys1/black4.png";
export default class Smileys extends Component {
  render() {
    return (
      <div>
        {/* <Draggable>
          <div className="smileybox">
            <img
              style={{ position: "absolute", top: "0px" }}
              className="plant"
              src={S1}
            />
          </div>
        </Draggable> */}
        <Draggable>
          <div className="smileybox">
            <img className="plant" src={S2} />
          </div>
        </Draggable>
        <Draggable>
          <div className="smileybox">
            <img className="plant" src={S3} />
          </div>
        </Draggable>
        <Draggable>
          <div className="smileybox">
            <img
              className="plant"
              style={{ position: "relative", top: "0px" }}
              src={S4}
            />
          </div>
        </Draggable>
      </div>
    );
  }
}
