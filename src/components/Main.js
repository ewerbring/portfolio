import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Switch, Route } from "react-router-dom";
import LandingPage from "./Landing";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects2";
import Resume from "./Resume";
import Stars from "./Stars";
import MobileAbout from "../mobilecomponents/MAbout";
import MobileContact from "../mobilecomponents/MContact";
import MobileProjects from "../mobilecomponents/MProjects";
import MobileResume from "../mobilecomponents/MResume";
import MobileStars from "../mobilecomponents/MStars";
import MobileLanding from "../mobilecomponents/MLanding";
import Plant from "../components/Plant";
import Dot from "../components/Dot";
import Pattern from "../components/Pattern";

import ProjectDetails from "../containers/Projectdetails";
import MobileProjectDetails from "../containers/MProjectdetails";

export default class Main extends Component {
  state = {
    width: window.innerWidth
  };
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 700;
    // the rest is the same...

    if (isMobile) {
      return (
        <div>
          <div className="grain"></div>

          <div className="test">
            <div className="navshadow"></div>
            <div className="navbar">
              <Link className="navlink" to="/about">
                About
              </Link>
              <Link className="navlink" to="/projects">
                Projects
              </Link>
            </div>
          </div>

          <div>
            {" "}
            <Switch>
              <Route exact path="/" component={MobileAbout} />
              <Route exact path="/projects" component={MobileLanding} />
              <Route exact path="/about" component={MobileAbout} />

              <Route
                exact
                path="/projects/:projectId"
                component={MobileProjectDetails}
              />
            </Switch>
            <Dot />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="grain"></div>
          <div className="navshadow"></div>
          <div className="test">
            <Link className="navlink" to="/about">
              About
            </Link>
            <Link className="navlink" to="/projects">
              Projects
            </Link>
          </div>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/stars" component={Stars} />
            <Route exact path="/pattern" component={Pattern} />

            <Route
              exact
              path="/projects/:projectId"
              component={ProjectDetails}
            />
          </Switch>{" "}
          <Dot />
          <Plant />
        </div>
      );
    }
  }
}
