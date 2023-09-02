import React, { useState } from 'react';
import './App.css';
import foodsData from "./foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [filteredFoods, setFilteredFoods] = useState(foods);

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
    setFilteredFoods([...filteredFoods, newFood]);
  };

  const handleSearch = (term) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  const handleDeleteFood = (index) => {
    const updatedFoods = [...foods];
    updatedFoods.splice(index, 1);
    setFoods(updatedFoods);
    setFilteredFoods(updatedFoods); // Actualiza también la lista filtrada
  };

  return (
    <div className="app-container">
      <AddFoodForm onAddFood={handleAddFood} />
      <Search onSearch={handleSearch} />
      <div className="food-list">
        {filteredFoods.map((food, index) => (
          <div key={index} className="food-item">
            <FoodBox food={food} onDelete={() => handleDeleteFood(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
