import React, { Component } from "react";
import { Link } from "react-router-dom";
import projects from "../projects";
import ImageGallery from "react-image-gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
    const myProjects2 = this.state.projects;

    return (
      <div className="mobile">
        <div>
          {myProjects.map(eachProject => {
            return (
              <div className="mobtitlebox" key={eachProject.id}>
                <div
                  onClick={scroll}
                  className="mobiletitle"
                  to={`/projects/${eachProject.id}`}
                >
                  <Carousel>
                    {myProjects2.map(eachProject2 => {
                      return (
                        <div>
                          <img src={eachProject2.imageM[0].original} />
                          <p className="legend">Legend 1</p>
                        </div>
                      );
                    })}
                  </Carousel>
                  {/* <img
                    className="mobileHero"
                    src={eachProject.image[0]}
                    alt="haj"
                  /> */}
                  <div className="textBox">
                    <div className="titlebox">{eachProject.name}</div>
                    <div className="descbox">{eachProject.description}</div>
                  </div>
                </div>

                <hr />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
