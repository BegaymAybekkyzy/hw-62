import React from "react";
import "./Buttons.css";

interface Props {
  gameRestart: () => void;
  text: string;
}

const Buttons: React.FC<Props> = ({ gameRestart, text }) => {
  return (
    <button className="btn btn-restart-game" onClick={gameRestart}>
      {text}
    </button>
  );
};

export default Buttons;
