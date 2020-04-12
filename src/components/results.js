import React from "react";
import { useSelector } from "react-redux";
const Results = () => {
  const { one, two, three } = useSelector((state) => state);

  const votesOneInPercent = () => {
    if (one) {
      return (one / (one + two + three)) * 100;
    }
    return 0;
  };

  const votesTwoInPercent = () => {
    if (two) {
      return (two / (one + two + three)) * 100;
    }
    return 0;
  };

  const votesThreeInPercent = () => {
    if (three) {
      return (three / (one + two + three)) * 100;
    }
    return 0;
  };

  function votesOneInPercentStyle() {
    return {
      width: votesOneInPercent() + "%",
    };
  }

  function votesTwoInPercentStyle() {
    return {
      width: votesTwoInPercent() + "%",
    };
  }

  function votesThreeInPercentStyle() {
    return {
      width: votesThreeInPercent() + "%",
    };
  }

  return (
    <div className="results-wrapper">
      <span className="label">
        Thor ({one} oy): {votesOneInPercent().toFixed(2) + "%"}
      </span>
      <div className="progress">
        <div
          className="progress-bar thor-color"
          style={votesOneInPercentStyle()}
        ></div>
      </div>
      <span className="label">
        Captain America ({two} oy): {votesTwoInPercent().toFixed(2) + "%"}
      </span>
      <div className="progress">
        <div
          className="progress-bar cap-color"
          style={votesTwoInPercentStyle()}
        ></div>
      </div>
      <span className="label">
        Black Panther ({three} oy): {votesThreeInPercent().toFixed(2) + "%"}
      </span>
      <div className="progress">
        <div
          className="progress-bar panther-color"
          style={votesThreeInPercentStyle()}
        ></div>
      </div>
    </div>
  );
};

export default Results;
