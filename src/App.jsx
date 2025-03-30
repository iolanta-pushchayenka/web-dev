import React from 'react';

function App() {
  const items = ['Phone1', 'Phone2', 'Phone3'];

  return (
    <div>
      <ul>
        {items.map((phone) => (
          <li>{phone}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
