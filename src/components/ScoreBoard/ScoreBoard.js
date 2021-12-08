import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pause, resume, restart } from "../../actions";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { RiRestartFill } from "react-icons/ri";

export default function ScoreBoard(props) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { score, isRunning, gameOver } = game;
  return (
    <div className="score-board">
      <div className="score">Score:{score}</div>
      <div className="level">Level: 1</div>
      <button
        className="score-board-button"
        onClick={(e) => {
          if (gameOver) {
            return;
          }
          if (isRunning) {
            dispatch(pause());
          } else {
            dispatch(resume());
          }
        }}
      >
        {isRunning ? <FaPauseCircle /> : <FaPlayCircle />}
      </button>
      <button
        className="score-board-button"
        onClick={(e) => {
          dispatch(restart());
        }}
      >
        <RiRestartFill />
      </button>
    </div>
  );
}
