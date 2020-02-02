import React, { Component } from "react";
import { Link } from "react-router-dom";
import projects from "../projects";
import ImageGallery from "react-image-gallery";
import "../projects.scss";
import { Player, ControlBar } from "video-react";
import "../styles/scss/video-react.scss"; // or import scss
import ArchVid from "../Assets2/Archrenderings/arch2.mp4";
import { Shake, ShakeSlow, ShakeHard, ShakeHorizontal } from "reshake";

let myProjects;
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
      swim: "swim",
      projects: projects
    };

    this.swimSwitch = this.swimSwitch.bind(this);
    this.swimSwitchDeep = this.swimSwitchDeep.bind(this);
    this.swimSwitchShallow = this.swimSwitchShallow.bind(this);
  }
  componentDidMount() {
    this.setState({
      swim: "both"
    });
  }
  swimSwitch() {
    this.setState({
      swim: "both"
    });
  }
  swimSwitchShallow() {
    this.setState({
      swim: "swim"
    });
  }
  swimSwitchDeep() {
    this.setState({
      swim: "deepdive"
    });
  }

  render() {
    const myProjects2 = this.state.projects;

    if (this.state.swim !== "both") {
      myProjects = myProjects2.filter(
        project => project.filter === this.state.swim
      );
    } else myProjects = myProjects2;
    console.log();

    return (
      <div>
        <div className="projectIntro">
          <h1 className="introheader">
            If this collection of projects was a swimming pool, some projects
            would be floating on the surface. You could{" "}
            <Shake
              className="inlink2"
              h={2}
              v={2}
              r={4}
              dur={700}
              int={21.6}
              max={1005}
              fixed={true}
              fixedStop={false}
              freez={false}
              onClick={this.swimSwitchShallow}
            >
              take part of them
            </Shake>{" "}
            just by swimming on the surface level.{" "}
            <Shake
              className="inlink2"
              h={2}
              v={24}
              r={14}
              dur={4700}
              int={21.6}
              max={1005}
              fixed={true}
              fixedStop={false}
              freez={false}
              onClick={this.swimSwitchDeep}
            >
              Some other projects
            </Shake>{" "}
            has some sort of conceptual depth to them, and you would have to
            make a deep dive and read a little bit about them in order for them
            to make sense. But of course, you could look at{" "}
            <Shake
              className="inlink2"
              h={22}
              v={2}
              r={4}
              dur={7200}
              int={21.6}
              max={1005}
              fixed={true}
              fixedStop={false}
              freez={false}
              onClick={this.swimSwitch}
            >
              both of them
            </Shake>{" "}
            at the same time.{" "}
          </h1>
        </div>{" "}
        <div className="desktop">
          {myProjects.map(eachProject => {
            if (eachProject.type === "image") {
              return (
                <div className="desktopbox" key={eachProject.id}>
                  <div
                    onClick={scroll}
                    className="mobiletitle"
                    to={`/projects/${eachProject.id}`}
                  >
                    <ImageGallery
                      className="imageGallery"
                      showFullscreenButton={true}
                      showPlayButton={false}
                      showThumbnails={false}
                      slideDuration="0"
                      items={eachProject.imageM}
                    />

                    <div className="textBox">
                      <div className="titlebox">{eachProject.name}</div>
                      <a
                        style={{ display: "table-cell" }}
                        href={eachProject.link}
                        target="_blank"
                      >
                        {eachProject.linkName}{" "}
                      </a>
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
                      ControlBar={false}
                    />{" "}
                    <div className="textBox">
                      <div className="titlebox">{eachProject.name}</div>
                      <a
                        style={{ display: "table-cell" }}
                        href={eachProject.link}
                        target="_blank"
                      >
                        {eachProject.linkName}{" "}
                      </a>
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
