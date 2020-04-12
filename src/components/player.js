import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Poll } from "./poll";

import videojs from "video.js";

import "./stylesheets/player.css";
import "video.js/dist/video-js.css";

const overlay = document.getElementById("video-overlay");
export default class Player extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.el.setAttribute("id", "poll");
    this.state = {
      modalEnabled: false,
    };
  }

  componentDidMount() {
    overlay.appendChild(this.el);
    let that = this;

    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      this.on("pause", () => {
        that.setState({
          ...that.state,
          modalEnabled: true,
        });

        let player = this;
        this.createModal(overlay).on("modalclose", function () {
          player.play();
          that.setState({
            ...that.state,
            modalEnabled: false,
          });
        });
      });
    });
  }

  componentWillUnmount() {
    overlay.removeChild(this.el);
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <>
        {this.state.modalEnabled
          ? ReactDOM.createPortal(<Poll />, this.el)
          : ""}
        <div data-vjs-player>
          <video
            ref={(node) => (this.videoNode = node)}
            className="video-js"
            id="videojs-overlay-player"
          ></video>
        </div>
      </>
    );
  }
}
