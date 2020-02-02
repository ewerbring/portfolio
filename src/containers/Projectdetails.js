import React from "react";
import { Link } from "react-router-dom";
import projects from "../projects";
import Draggable from "react-draggable";
import List from "../components/Projects";
import ImageGallery from "react-image-gallery";
// import "../projects.scss";

const ProjectDetails = props => {
  console.log(props, projects);

  const projectId = props.match.params.projectId;

  let foundProject = projects.find(project => {
    //   if (project.id === projectId) return true
    return project.id === projectId;
  });

  let image = foundProject.image;
  let images = foundProject.imageM;
  console.log(image);

  return (
    <div>
      <h1>Swim around or deepdive?</h1>
      <List />

      <div className="imagebox" id="imagebox">
        <ImageGallery
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
          slideDuration="0"
          items={foundProject.imageM}
        />
        {image.map(eachImage => {
          return (
            <div>
              <img className="pImage" src={eachImage} />
              <hr />
            </div>
          );
        })}
        <iframe
          className="resp-iframe"
          src={foundProject.video}
          width="100%"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </div>

      <Draggable className="test">
        <div className="descriptionbox">
          <h2 className="pHeader">{foundProject.name} </h2>
          <h2 className="pHeader">
            {foundProject.technologies} - {foundProject.year}{" "}
          </h2>

          <p>{foundProject.description}</p>
        </div>
      </Draggable>

      {/* <Link to="/projects">Back</Link> */}
    </div>
  );
};

export default ProjectDetails;
