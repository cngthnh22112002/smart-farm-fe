import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Get the token from your authentication system
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QwMzIyNDExYjgwN2ZmMjc3YzY1NCIsImlhdCI6MTY4MjI1NjgwOSwiZXhwIjoxNjgyNTE2MDA5fQ.dFQ8GJ3x-R0Tb4HgP72BqyrzfBYR3iZxyjulbZcW7Ik';
    setToken(token);

    fetch('http://localhost:5000/notification/today', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <p>Title: {item.title}</p>
            <p>Message: {item.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;