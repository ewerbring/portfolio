import React, { Component } from "react";
import Starback from "./Starback";
import thesis from "../thesiscomponents";
import { Link } from "react-router-dom";
import "../pattern.scss";
import testimage from "../Assets2/Waterman/montage_11.gif";

export default class Stars extends Component {
  state = {
    projects: thesis
  };

  render() {
    const myProjects = this.state.projects;

    return (
      <div>
        <div className="maincontainer">
          <div className="boxNew b1">
            {" "}
            <div className="underCircle">
              {" "}
              <div className="whitebox corner">
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
                <div className="blackbox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
              </div>{" "}
              <div className="whitebox"></div>
              <div className="whitebox"></div>
              <div className="whitebox"></div>
            </div>
            <div className="circle1">
              <div className="outerring">
                {" "}
                <div className="triangles">
                  <div className="triangleTop"></div>
                  <div className="triangleRight"></div>
                  <div className="triangleLeft"></div>
                  <div className="triangleBottom"></div>
                </div>
                <div className="innerring ir1"></div>
              </div>
            </div>
          </div>
          <div className="boxNew b2">
            <div className="headerBox">Calles projects</div>
          </div>
          <div className="boxNew b3">
            {" "}
            <div className="underCircle">
              {" "}
              <div className="whitebox corner">
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
                <div className="blackbox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
              </div>{" "}
              <div className="whitebox"></div>
              <div className="whitebox"></div>
              <div className="whitebox"></div>
            </div>
            <div className="circle1">
              <div className="outerring">
                <div className="triangles">
                  <div className="triangleTop"></div>
                  <div className="triangleRight"></div>
                  <div className="triangleLeft"></div>
                  <div className="triangleBottom"></div>
                </div>
                <div className="innerring ir2"></div>
              </div>
            </div>
          </div>
          <div className="boxNew b4">
            <div className="blackbox"></div>
            <div className="whitebox"></div>
            <div className="whitebox w1"></div>
            <div className="whitebox"></div>
            <div className="blackbox"></div>
            <div className="blackbox"></div>
            <div className="whitebox"></div>
            <div className="whitebox w2"></div>
            <div className="whitebox"></div>
            <div className="blackbox"></div>
          </div>
          <div className="boxNew b5">
            <div className="columnLeft">
              <div className="blackbox"></div>
              <div className="whitebox"></div>
              <div className="blackbox"></div>
              <div className="whitebox"></div>
              <div className="blackbox"></div>
              <div className="whitebox"></div>
              <div className="blackbox"></div>
            </div>
            <div className="mainImageBox">
              <img className="mainImage" src={testimage} alt="" />
            </div>
            <div className="columnLeft">
              <div className="blackbox"></div>
              <div className="whitebox"></div>
              <div className="blackbox"></div>
              <div className="whitebox"></div>
              <div className="blackbox"></div>
              <div className="whitebox"></div>
              <div className="blackbox"></div>
            </div>
          </div>
          <div className="boxNew b6">
            <div className="blackbox"></div>
            <div className="whitebox"></div>
            <div className="whitebox w3"></div>
            <div className="whitebox"></div>
            <div className="blackbox"></div>
            <div className="blackbox"></div>
            <div className="whitebox"></div>
            <div className="whitebox w4"></div>
            <div className="whitebox"></div>
            <div className="blackbox"></div>
          </div>
          <div className="boxNew b7">
            {" "}
            <div className="underCircle">
              {" "}
              <div className="whitebox"></div>
              <div className="whitebox"></div>
              <div className="whitebox corner">
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
                <div className="blackbox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
              </div>{" "}
              <div className="whitebox"></div>
            </div>
            <div className="circle1">
              <div className="outerring">
                <div className="triangles">
                  <div className="triangleTop"></div>
                  <div className="triangleRight"></div>
                  <div className="triangleLeft"></div>
                  <div className="triangleBottom"></div>
                </div>
                <div className="innerring ir3"></div>
              </div>
            </div>
          </div>
          <div className="boxNew b8">
            {" "}
            <div className="blackbox"></div>
            <div className="whitebox"></div>
            <div className="whitebox w5"></div>
            <div className="whitebox"></div>
            <div className="blackbox"></div>
            <div className="blackbox"></div>
            <div className="whitebox"></div>
            <div className="whitebox"></div>
            <div className="blackbox"></div>
          </div>
          <div className="boxNew b9">
            <div className="underCircle">
              {" "}
              <div className="whitebox"></div>
              <div className="whitebox"></div>
              <div className="whitebox"></div>
              <div className="whitebox corner">
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
                <div className="blackbox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
                <div className="whitebox"></div>
                <div className="blackbox"></div>
              </div>
            </div>
            <div className="circle1">
              <div className="outerring">
                <div className="triangles">
                  <div className="triangleTop"></div>
                  <div className="triangleRight"></div>
                  <div className="triangleLeft"></div>
                  <div className="triangleBottom"></div>
                </div>
                <div className="innerring ir4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
