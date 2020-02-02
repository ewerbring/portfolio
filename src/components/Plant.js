import React, { Component } from "react";
import Draggable from "react-draggable";
import plant from "../Assets/plant.png";
import { Shake, ShakeSlow, ShakeHard, ShakeHorizontal } from "reshake";

export default class Plant extends Component {
  render() {
    return (
      <div>
        <Draggable>
          <div className="plantbox">
            <img className="plant" src={plant} />
          </div>
        </Draggable>
      </div>
    );
  }
}
