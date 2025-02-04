import meatImage from "../../../assets/images/meat.png";
import cheeseImage from "../../../assets/images/cheese.png";
import saladImage from "../../../assets/images/salad.png";
import baconImage from "../../../assets/images/bacon.png";
import Ingredient from "./components/Ingredient/Ingredient";
import Burger from "./components/Burger/Burger";
import Price from "./components/Price/Price";
import { IIngredientInfo, IIngredientQuantity } from "../../../types";
import { useState } from "react";
import "./BurgerConstructor.css";

const BurgerConstructor = () => {
  const [ingredients, setIngredients] = useState<IIngredientQuantity[]>([
    { name: "Meat", count: 0 },
    { name: "Cheese", count: 0 },
    { name: "Salad", count: 0 },
    { name: "Bacon", count: 0 },
  ]);

  const [totalPrice, setTotalPrice] = useState<number>(30);
  const [userIngredients, setUserIngredients] = useState<string[]>([]);

  const INGREDIENTS: IIngredientInfo[] = [
    {
      name: "Meat",
      price: 80,
      image: meatImage,
    },

    {
      name: "Cheese",
      price: 50,
      image: cheeseImage,
    },

    {
      name: "Salad",
      price: 10,
      image: saladImage,
    },

    {
      name: "Bacon",
      price: 60,
      image: baconImage,
    },
  ];

  const ingredientAddition = (index: number, price: number) => {
    const copyIngredients = [...ingredients];
    copyIngredients[index].count++;
    setIngredients(copyIngredients);

    setTotalPrice((prevState) => prevState + price);

    if (userIngredients.length === 0) {
      userIngredients.push(copyIngredients[index].name);
      setUserIngredients(userIngredients);
    } else {
      const copyUserIngredients = [...userIngredients];
      copyUserIngredients.push(copyIngredients[index].name);
      setUserIngredients(copyUserIngredients);
    }
  };

  const ingredientRemoval = (index: number, price: number) => {
    if (ingredients[index].count > 0) {
      const copyIngredients = [...ingredients];
      copyIngredients[index].count--;
      setIngredients(copyIngredients);

      setTotalPrice((prevState) => prevState - price);

      const copyUserIngredients = [...userIngredients];
      if (copyUserIngredients.indexOf(ingredients[index].name) !== -1) {
        copyUserIngredients.splice(
          copyUserIngredients.indexOf(ingredients[index].name),
          1,
        );
      }
      setUserIngredients(copyUserIngredients);
    }
  };

  return (
    <>
      <div className="container">
        <div className="burger-main-block">
          <div>
            <h2>Ingredients</h2>
            <div className="ingredient-block">
              {INGREDIENTS.map((ingredient, index) => (
                <Ingredient
                  key={index}
                  ingredientAddition={ingredientAddition}
                  index={index}
                  ingredient={ingredient}
                  ingredients={ingredients}
                  ingredientRemoval={ingredientRemoval}
                />
              ))}
            </div>
          </div>

          <div className="burger-block">
            <h2>Burger</h2>
            <Burger userIngredients={userIngredients} />
            <Price totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerConstructor;
