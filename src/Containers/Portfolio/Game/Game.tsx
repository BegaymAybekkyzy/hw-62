import { useState } from "react";
import Counter from "./components/Counter/Counter";
import Buttons from "./components/Buttons/Buttons";
import GameBoardWithItems from "./components/GameBoardWithItems/GameBoardWithItems";
import { IItems } from "../../../types";

const Game = () => {
  const playItemCreation = () => {
    const items: IItems[] = [];
    for (let i = 0; i < 36; i++) {
      items.push({
        hasItem: false,
        clicked: false,
      });
    }
    const randoCage = Math.floor(Math.random() * items.length);
    items[randoCage].hasItem = true;
    return items;
  };

  const [items, setItems] = useState<IItems[]>(playItemCreation());
  const [clickCount, setClickCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const showingAndHidingItem = (index: number) => {
    const copyItems = [...items];
    if (isGameOver) return;

    if (copyItems[index].hasItem && !copyItems[index].clicked) {
      setIsGameOver(true);
      setTimeout(() => {
        alert("Вы выиграли! Перезапустите игру");
      }, 0);
    }

    if (!copyItems[index].clicked) {
      copyItems[index] = {
        ...copyItems[index],
        clicked: true,
      };
      setItems(copyItems);
      setClickCount((prev) => prev + 1);
    }
  };

  const gameRestart = () => {
    setItems(playItemCreation());
    setClickCount(0);
    setIsGameOver(false);
  };

  return (
    <div className="container">
      <div className="game-container">
        <GameBoardWithItems
          items={items}
          showingAndHidingItem={showingAndHidingItem}
        />

        <br />
        <Counter count={clickCount} />
        <br />
        <Buttons gameRestart={gameRestart} text={"Перезапуск"}></Buttons>
      </div>
    </div>
  );
};

export default Game;
