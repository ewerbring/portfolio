import React from "react";
import "./App.css";
import "./App.scss";
import "./grid.scss";
import { Header, Layout, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/Main";
import { Link } from "react-router-dom";
import Border from "./components/Border";
import Plant from "../src/components/Plant";
import Draggable from "react-draggable";
import Smileys from "./components/Smileys";

function App() {
  return (
    <div>
      <Layout>
        <Content style={{ overflow: "scroll" }}>
          <Main />
        </Content>
      </Layout>
      {/* <Border /> */}
      {/* <Smileys /> */}
    </div>
  );
}

export default App;
