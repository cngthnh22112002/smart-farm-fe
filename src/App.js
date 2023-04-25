import { useState } from 'react';
import React from 'react';

function App() {
  const [gardenId, setGardenId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { gardenId: '64454b60b056956abb73c2c9' };

    const response = await fetch('http://localhost:5000/devices/led', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QwMzIyNDExYjgwN2ZmMjc3YzY1NCIsImlhdCI6MTY4MjI1MzI4MiwiZXhwIjoxNjgyNTEyNDgyfQ.IxH9k5-v39b6p8rVEuWl6r1V2JXzPliRB6_gtQkR9nE`
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result);
  };

  const handleInputChange = (event) => {
    setGardenId(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Garden ID:
        <input type="text" value={gardenId} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
