import Plant from "../Assets/plant.png";
import Draggable from "react-draggable";

import React from "react";
import { Link } from "react-router-dom";
import resume from "../components/Resume";

class Contact extends React.Component {
  state = {
    projects: resume
  };

  render() {
    const myProjects = this.state.projects;
    return (
      <div className="resume">
        <div>
          {myProjects.map(eachProject => {
            return (
              <div className="resumeBoxes" key={eachProject.id}>
                <h1 className={eachProject.titleClass}>{eachProject.name}</h1>
                <h1 className={eachProject.textClass}>
                  {eachProject.description}
                </h1>

                <hr />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Contact;
