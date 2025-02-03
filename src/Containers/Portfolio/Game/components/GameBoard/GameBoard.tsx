import * as React from "react";
import "./GameBoard.css";

interface Props {
  children: React.ReactNode;
}

const GameBoard: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="game-board">{children}</div>
    </>
  );
};

export default GameBoard;
