import React from 'react';
import { Input } from 'semantic-ui-react';

const DailyFoodEntries = (entries) => {
  return (
    <div className="DailyFoodEntries">
      <Input focus placeholder="Search..." />
    </div>
  );
};

export default DailyFoodEntries;