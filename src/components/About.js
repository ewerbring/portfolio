import React from "react";
import { Link } from "react-router-dom";
import Linkify from "react-linkify";
import PDF from "../Assets2/docs/Summer2019.pdf";
import Typing from "react-typing-animation";

import Smileys from "./Smileys";
import { Shake, ShakeSlow, ShakeHard, ShakeHorizontal } from "reshake";
const Experience = () => {
  const placesWhereIWorked = [
    {
      name: "CCCCCompany",
      city: "Barcelona",
      country: "Spain",
      jobTitle: "Things",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      jobStarted: "2017",
      jobEnded: ""
    },
    {
      name: "company",
      city: "Madrid",
      country: "Spain",
      jobTitle: "gellosda",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      jobStarted: "2015",
      jobEnded: "2017"
    }
  ];

  return (
    <div className="center">
      <Typing Typing speed={30}>
        <p className="aboutparagraph">
          Carl-Gustaf Ewerbring most often go by Calle.{" "}
          <Typing.Delay ms={250} /> He is currently getting his M.F.A in Graphic
          Design from Rhode Island School of design, and is expected to graduate
          in 2020.
          <Typing.Delay ms={800} />
        </p>
        <p className="aboutparagraph">
          Calle likes to work with difficult interfaces that can strengthen the
          relation between user and content.
          <Typing.Delay ms={800} />
        </p>
        <p className="aboutparagraph">
          This website is under construction – come back soon to see some of
          Calles work. <br></br>
          <br></br>
          <Typing.Delay ms={2000} />
          <Shake
            className="inlink"
            h={2}
            v={2}
            r={4}
            dur={700}
            int={21.6}
            max={1005}
            fixed={true}
            fixedStop={true}
            freez={false}
          >
            <a className="inlinkM" href={PDF} target="_blank">
              calles resume
            </a>
          </Shake>{" "}
          <br></br>
          <Shake
            className="inlink"
            h={2}
            v={2}
            r={4}
            dur={700}
            int={21.6}
            max={1005}
            fixed={true}
            fixedStop={true}
            freez={false}
          >
            <a className="inlinkM" href={"mailto: ewerbring@gmail.com"}>
              email
            </a>
          </Shake>{" "}
          <br></br>
          <Shake
            className="inlink"
            h={2}
            v={2}
            r={4}
            dur={700}
            int={21.6}
            max={1005}
            fixed={true}
            fixedStop={true}
            freez={false}
          >
            <div className="inlinkM">+14016325759</div>
          </Shake>{" "}
        </p>
      </Typing>
      {placesWhereIWorked.map((eachPlace, index) => {
        return (
          <div className="experience-content" key={index}>
            {/* <h3>{eachPlace.name}</h3>
            <p>
              {eachPlace.city}, {eachPlace.country}
            </p>
            <h4>{eachPlace.jobTitle}</h4>
            <p>{eachPlace.jobDescription}</p>
            <p>
              {eachPlace.jobStarted} - {eachPlace.jobEnded || "current"}
            </p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
