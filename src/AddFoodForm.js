import React, { useState } from 'react';
import { Input, Button } from 'antd';
import PropTypes from 'prop-types';

function AddFoodForm({ onAddFood }) {
  const [foodData, setFoodData] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleChange = (e, field) => {
    const value = e.target.value;
    setFoodData({ ...foodData, [field]: value });
  };

  const handleSubmit = () => {
    onAddFood(foodData);
    setFoodData({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  };

  return (
    <div className="add-food-form">
      <Input
        placeholder="Name"
        value={foodData.name}
        onChange={(e) => handleChange(e, 'name')}
      />
      <Input
        placeholder="Image URL"
        value={foodData.image}
        onChange={(e) => handleChange(e, 'image')}
      />
      <Input
        placeholder="Calories"
        value={foodData.calories}
        onChange={(e) => handleChange(e, 'calories')}
      />
      <Input
        placeholder="Servings"
        value={foodData.servings}
        onChange={(e) => handleChange(e, 'servings')}
      />
      <Button type="primary" onClick={handleSubmit}>
        Add Food
      </Button>
    </div>
  );
}

AddFoodForm.propTypes = {
  onAddFood: PropTypes.func.isRequired,
};

export default AddFoodForm;
