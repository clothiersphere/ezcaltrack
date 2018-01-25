import React from 'react';

const ServingSizeInfoDisplay = (data) => {
  let servingDisplay = null;

  if (Object.keys(data).length > 0) {
    const selectedServing = serving => (
      <div>
        {serving.name}
        {serving.serving_description}
        <div className="servingCalories">
          {serving.calories} calories
        </div>
        <div className="servingProtein">
          {serving.protein} protein
        </div>
        <div className="servingCarbohydrate">
          {serving.carbohydrate} carbs
        </div>
        <div className="servingFat">
          {serving.fat} fat
        </div>
      </div>
    );
    servingDisplay = selectedServing(data);
  }
  return (
    <div className="servingSizeInfoDisplay">
      {servingDisplay}
    </div>
  );
};

export default ServingSizeInfoDisplay;
