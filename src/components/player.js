import React, { Component } from "react";
import { Poll } from "./poll";

import videojs from "video.js";

import "./stylesheets/player.css";
import "video.js/dist/video-js.css";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEnabled: false,
    };
  }

  componentDidMount() {
    let that = this;
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      this.on("pause", () => {
        that.setState({
          ...that.state,
          modalEnabled: true,
        });

        var modal = this.createModal(document.getElementById("poll"), {
          temporary: false,
        });

        let player = this;
        modal.on("modalclose", function () {
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
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    const INITAL_VALUE = { display: "inline-block" };
    const NONE = { display: "none" };
    return (
      <>
        <div id="poll" style={this.state.modalEnabled ? INITAL_VALUE : NONE}>
          <Poll />
        </div>
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
