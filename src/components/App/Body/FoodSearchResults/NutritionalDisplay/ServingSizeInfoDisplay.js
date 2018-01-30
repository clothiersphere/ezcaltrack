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
          Serving Size: {Math.round(serving.metric_serving_amount)} {serving.metric_serving_unit}
          <div className="amountPerServing">
            Amount Per Serving
            <div className="ampCalories">
              Calories {serving.calories}
            </div>
            <div className="ampFat">
              Calories from Fat {Math.round(serving.fat * 9)}
            </div>
            <div className="nutritionalInfo">
              {serving.fat} 1%
              <br />
              {serving.saturated_fat} 1%
              <br />
              {serving.polyunsaturated_fat}
              <br />
              {serving.monounsaturated_fat}
              <div className="cholesterol">
                Cholesterol {serving.cholesterol}mg 1%
              </div>
              <div className="sodium">
                Sodium {serving.sodium}mg
              </div>
              <div className="potassium">
                Potassium {serving.potassium}mg
              </div>
              <div className="totalCarb">
                Total Carbohydrate {serving.carbohydrate}g 1%
                Dietary Fiber {serving.fiber}g 1%
                Sugars {serving.sugar}
              </div>
              <div className="protein">
                Protein {serving.protein}
              </div>
            </div>
            <div className="vitamin">
              Vitamin A {serving.vitamin_a}
              Vitamin C {serving.vitamin_c}
              Calcium {serving.calcium}
              Iron {serving.iron}
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
