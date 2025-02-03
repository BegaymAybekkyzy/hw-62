import * as React from "react";
import "./Counter.css";

interface Props {
  count: number;
}

const Counter: React.FC<Props> = ({ count }) => {
  return (
    <>
      <span className="game-count">Количество попыток: {count}</span>
    </>
  );
};

export default Counter;
