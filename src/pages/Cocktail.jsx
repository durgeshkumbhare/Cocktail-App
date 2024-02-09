import React from "react";
import { Link, useLoaderData, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { id, data };
};

const Cocktail = () => {
  const { data } = useLoaderData();

  // if (!data) return <h2>Something Went Wrong</h2>;
  if (!data) return <Navigate to="/" />;

  const drink = data.drinks[0];

  const validIngredients = Object.keys(drink)
    .filter((key) => {
      return key.startsWith("strIngredient") && drink[key] !== null;
    })
    .map((key) => drink[key]);

  const {
    strGlass: glass,
    strAlcoholic: info,
    strDrinkThumb: image,
    strCategory: category,
    strInstructions: instructions,
    strDrink: title,
  } = drink;
  // console.log(drink);
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{title}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={title} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {title}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span> {glass}
          </p>
          <p>
            <span className="drink-data">ingrdients:</span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
