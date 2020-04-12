import React from "react";
import { voteOne, voteTwo, voteThree } from "../actions";
import "./stylesheets/questions.css";
import { useDispatch } from "react-redux";

const Questions = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="header">
        <h6>"Avengers: Infinity War" favori karakteriniz hangisi?</h6>
        <div className="icon-set">
          <div className="vote-icon">
            <img
              src="https://pre00.deviantart.net/3c93/th/pre/i/2018/092/c/6/king_thor_icon_by_thelivingethan-dc7ovrv.png"
              height="96"
              alt="thor"
              onClick={() => dispatch(voteOne())}
            ></img>
          </div>
          <div className="vote-icon">
            <img
              src="https://pre00.deviantart.net/985f/th/pre/i/2018/085/1/6/steve_rogers_icon_by_thelivingethan-dc70574.png"
              height="96"
              alt="captain america"
              onClick={() => dispatch(voteTwo())}
            ></img>
          </div>
          <div className="vote-icon">
            <img
              src="https://pre00.deviantart.net/303e/th/pre/i/2018/019/d/9/black_panther_character_icon_by_thelivingethan-dc0ju3a.png"
              height="96"
              alt="black panther"
              onClick={() => dispatch(voteThree())}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
