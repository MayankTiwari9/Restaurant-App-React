import React from "react";
import "./MealList.css";

const MealList = () => {
  const mealItem = [
    {
      id: 1,
      name: "Sushi",
      descriptiom: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: 2,
      name: "Schnitzel",
      descriptiom: "A german speciality!",
      price: 16.5,
    },
    {
      id: 3,
      name: "Barbecue Burger",
      descriptiom: "America, raw, meaty",
      price: 12.99,
    },
    {
      id: 4,
      name: "Green Bowl",
      descriptiom: "Healthy...and green...",
      price: 16.0,
    },
  ];

  return (
    <ul  className="mealList-main">
      {mealItem.map((item) => {
        return (
          <li key={item.id}  className="mealList">
            <h3>{item.name}</h3>
            <div className="mealList-description">{item.descriptiom}</div>
            <div className="mealList-price">${item.price.toFixed(2)}</div>
          </li>
        );
      })}
      <div></div>
    </ul>
  );
};

export default MealList;
