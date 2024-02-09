import React from "react";
import CocktailCard from "./CocktailCard";
import Wrapper from "../assets/wrappers/CocktailList";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h3 style={{ textAlign: "center" }}>no match Found</h3>;
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strAlcoholic, strDrink, strGlass, strDrinkThumb } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
