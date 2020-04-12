import React, { Component } from "react";
import Questions from "./questions";
import Results from "./results";
import Credits from "./credits";

export class Poll extends Component {
  render() {
    return (
      <>
        <Questions />
        <Results />
        <Credits />
      </>
    );
  }
}
