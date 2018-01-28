import React from 'react';

const ServingSizeInfoDisplay = (data) => {
  let servingDisplay = null;

  if (Object.keys(data).length > 0) {
    const selectedServing = serving => (
      <div>
        {serving.metric_serving_amount} {serving.metric_serving_unit}
        <div className="servingSizeBox">
          <div className="servingSizeBoxTop">
            <div className="servingCalories">
              {serving.calories} calories
            </div>
          </div>
          <div className="servingSizeBoxBottom">
            <div className="servingProtein">
              {serving.protein} p
            </div>
            <div className="servingCarbohydrate">
              {serving.carbohydrate} c
            </div>
            <div className="servingFat">
              {serving.fat} f
            </div>
          </div>
        </div>
        <div className="nutritionalContent">
          <div className="nutritionFacts">
            Nutrition Facts
          </div>
          <br />
          Serving Size: {Math.round(serving.metric_serving_amount)} {serving.metric_serving_unit}
          <div className="amountPerServing">
            Amount Per Serving
            <div className="ampCalories">
              Calories {serving.calories}
            </div>
            <div className="ampFat">
              Calories from Fat {Math.round(serving.fat * 9)}
            </div>
          </div>

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
