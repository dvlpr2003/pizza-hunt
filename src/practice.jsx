import React, { useState } from 'react';


const App1 = () => {
  // Initialize the array with objects
  const [arry, setArry] = useState([
    { id: 1, price: 20, name: "jerry" },
    { id: 2, price: 10, name: "apple" },
    { id: 1, price: 20, name: "jerry" }
  ]);

  // Function to handle the decrease button click
  const handleDecrease = (idToRemove) => {
    // Find the index of the first occurrence of the object with the specified id
    const index = arry.findIndex(item => item.id === idToRemove);

    // If the object is found, create a new array without that object
    if (index !== -1) {
      const newArry = [...arry];
      newArry.splice(index, 1);
      setArry(newArry);
    }
  };

  return (
    <div>
      <h1>Array Elements</h1>
      <ul>
        {arry.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <button onClick={() => handleDecrease(1)}>Decrease Jerry</button>
      <button onClick={() => handleDecrease(2)}>Decrease Apple</button>
    </div>
  );
};

export default App1;

