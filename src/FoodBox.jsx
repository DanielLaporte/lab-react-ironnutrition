import React from 'react';
import { Card, Col, Button } from 'antd';
import PropTypes from 'prop-types';

function FoodBox({ food, onDelete }) {
  return (
    <Col span={8}>
      <Card
        title={food.name}
        style={{ width: '100%', margin: 10 }}
      >
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} kcal</b>
        </p>
        <Button type="primary" onClick={onDelete}>Delete</Button>
      </Card>
    </Col>
  );
}

FoodBox.propTypes = {
  food: PropTypes.shape({
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired, // Propiedad de función para eliminar
};

export default FoodBox;
