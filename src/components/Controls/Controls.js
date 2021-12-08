import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveDown, moveLeft, moveRight, rotate } from "../../actions";
import { AiOutlineLeft, AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { MdOutlineRotate90DegreesCcw } from "react-icons/md";

export default function Controls(props) {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.game.isRunning);
  const gameOver = useSelector((state) => state.game.gameOver);

  return (
    <div className={`controls`}>
      {/* blank */}
      <button className="control-button blank"></button>

      {/* rotate */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(rotate());
        }}
      >
        <MdOutlineRotate90DegreesCcw />
      </button>

      {/* blank */}
      <button className="control-button blank"></button>

      {/* left */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveLeft());
        }}
      >
        <AiOutlineLeft />
      </button>

      {/* down */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveDown());
        }}
      >
        <AiOutlineDown />
      </button>

      {/* right */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveRight());
        }}
      >
        <AiOutlineRight />
      </button>
    </div>
  );
}
