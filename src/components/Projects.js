import Plant from "../Assets/plant.png";
import Draggable from "react-draggable";

import React from "react";
import { Link } from "react-router-dom";
import projects from "../projects";
import ImageGallery from "react-image-gallery";

let liClasses = {
  "main-class": true,
  activeClass: true
};

class Projects extends React.Component {
  state = {
    projects: projects
  };

  render() {
    const myProjects = this.state.projects;
    return (
      <div className="leftContainer">
        <div>
          {myProjects.map(eachProject => {
            return (
              <div className="projectTitleBox" key={eachProject.id}>
                <Link
                  className={eachProject.titleClass}
                  to={`/projects/${eachProject.id}`}
                >
                  {eachProject.name}
                </Link>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
