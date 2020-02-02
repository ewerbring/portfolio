import React, { Component } from "react";

var tempX = 0;
var tempY = 0;

let divstyle = {};
export default class Blurback extends Component {
  circle() {
    function getMouseXY(e) {
      tempX = e.pageX;
      tempY = e.pageY;

      divstyle = {
        clipPath: "circle(80px at " + tempX + "px " + tempY + "px)"
      };

      if (tempX < 0) {
        tempX = 0;
      }
      if (tempY < 0) {
        tempY = 0;
      }
    }
    document.querySelector(".psudd2").style.clipPath =
      "circle(80px at " + tempX + "px " + tempY + "px)";
    document.addEventListener("mousemove", getMouseXY);
  }

  render() {
    return (
      <div onMouseMove={this.circle}>
        <div id="chartdiv" />
        <p className="psudd">
          Men frasen är nonsens, har den en lång historik. Typographers har
          använt frasen för flera talen för att visa sina teckensnitt mest
          utmärkande egenskaper. Det används eftersom bokstäverna som berörs och
          teckenavstånd i dessa kombinationer visa på sitt bästa, vikt, design
          och andra viktiga funktioner i typsnittet. En 1994 utfärdande av ”före
          & efter” magazine spår ”Lorem ipsum...” till en virrvarret latinsk
          version av en passage från de Finibus Bonorum et Malorum, en treatise
          på teorin av etiska regler som skrivits av Cicero i 45 B.C. Passage
          ”Lorem ipsum...” hämtas från texten, ”Neque porro quisquam est types
          dolorem ipsum quia dolor sit amet, consectetur, adipisci din...”, som
          översätter som ”det finns ingen som bättre smärta, som söker efter och
          vill ha den, helt enkelt eftersom det är smärta... ” En skrivare
          anpassas under 1500s, Cicero's text om du vill utveckla en sida av
          typen prover. Sedan dess har liknande latinsk text inom
          tryckeribranschen standard för falska eller dummy, text. Grafiska
          designers hade mock upp layouter genom att rita squiggled raderna för
          att ange text före elektronisk publicering. Med ankomsten av
          självhäftande ark förtryckta med ”Lorem ipsum” gav en mer realistisk
          för att ange om text skulle gå på en sida.
        </p>
        <p id="suddis" style={divstyle} className="psudd2">
          Men frasen är nonsens, har den en lång historik. Typographers har
          använt frasen för flera talen för att visa sina teckensnitt mest
          utmärkande egenskaper. Det används eftersom bokstäverna som berörs och
          teckenavstånd i dessa kombinationer visa på sitt bästa, vikt, design
          och andra viktiga funktioner i typsnittet. En 1994 utfärdande av ”före
          & efter” magazine spår ”Lorem ipsum...” till en virrvarret latinsk
          version av en passage från de Finibus Bonorum et Malorum, en treatise
          på teorin av etiska regler som skrivits av Cicero i 45 B.C. Passage
          ”Lorem ipsum...” hämtas från texten, ”Neque porro quisquam est types
          dolorem ipsum quia dolor sit amet, consectetur, adipisci din...”, som
          översätter som ”det finns ingen som bättre smärta, som söker efter och
          vill ha den, helt enkelt eftersom det är smärta... ” En skrivare
          anpassas under 1500s, Cicero's text om du vill utveckla en sida av
          typen prover. Sedan dess har liknande latinsk text inom
          tryckeribranschen standard för falska eller dummy, text. Grafiska
          designers hade mock upp layouter genom att rita squiggled raderna för
          att ange text före elektronisk publicering. Med ankomsten av
          självhäftande ark förtryckta med ”Lorem ipsum” gav en mer realistisk
          för att ange om text skulle gå på en sida.
        </p>

        <script src="main.js" />
      </div>
    );
  }
}
