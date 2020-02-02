import React, { Component } from "react";
import Starback from "./Starback";
import thesis from "../thesiscomponents";
import { Link } from "react-router-dom";
import BlurBack from "./Blurback";
let count = 0;

export default class Stars extends Component {
  state = {
    projects: thesis
  };

  mousover() {
    count += 1;
    console.log("works");
    if (count === 3) {
    }
  }
  render() {
    const myProjects = this.state.projects;

    return (
      <div>
        <div className="gridmaincontainer">
          <div className="b1 "></div>

          {myProjects.map(eachProject => {
            return (
              <a
                onMouseEnter={this.mousover}
                href="http://www.google.com"
                target="blank"
                className="box"
                key={eachProject.id}
              >
                {eachProject.name}
                <br />

                {eachProject.year}
                <br />
                {eachProject.type}
                <br />
                {eachProject.author}
              </a>
            );
          })}
        </div>
        <BlurBack />
      </div>
    );
  }
}
