import React, { Component } from "react";
import { Link } from "react-router-dom";
import projects from "../projects";
import ImageGallery from "react-image-gallery";
import { Player } from "video-react";

import "../mprojects.scss";

function scroll() {
  // var imagebox = document.getElementById("imagebox");
  // imagebox.scrollTop = 0;
  console.log("hajj");
}

export default class Texts extends Component {
  onClick(event) {
    this.addSentence1();
    this.addScrollPos();
  }

  constructor(props) {
    super(props);

    this.state = {
      projects: projects
    };
    this.imageCounter = this.imageCounter.bind(this);
  }

  imageCounter() {
    let counter = this.state.counter;
    this.setState({
      counter: counter + 1
    });
    console.log("Hjajjjsj", this.state.counter);
  }

  render() {
    const myProjects = this.state.projects;

    return (
      <div className="mobile">
        <div>
          {myProjects.map(eachProject => {
            if (eachProject.type === "image") {
              return (
                <div className="desktopbox" key={eachProject.id}>
                  <div
                    onClick={scroll}
                    className="mobiletitle"
                    to={`/projects/${eachProject.id}`}
                  >
                    {" "}
                    <div className="imageGallery">
                      <ImageGallery
                        className="imageGallery"
                        showFullscreenButton={true}
                        showPlayButton={false}
                        showThumbnails={false}
                        slideDuration="0"
                        items={eachProject.imageM}
                      />
                    </div>
                    {/* <img
                          className="mobileHero"
                          src={eachProject.image[0]}
                          alt="haj"
                        /> */}
                    <div className="textBoxM">
                      <div className="titlebox">{eachProject.name}</div>
                      <div className="descbox">{eachProject.description}</div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="desktopbox" key={eachProject.id}>
                  <div
                    onClick={scroll}
                    className="mobiletitle"
                    to={`/projects/${eachProject.id}`}
                  >
                    <Player
                      playsInline
                      poster="/assets/poster.png"
                      src={eachProject.video}
                      ref={player => {
                        this.player = player;
                      }}
                      autoPlay
                      muted
                      loop
                    />
                    <div className="textBoxM">
                      <div className="titlebox">{eachProject.name}</div>
                      <div className="descbox">{eachProject.description}</div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
