import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const obj = {
    name: "A",
    age: 18
  }
  return (
    <div className='sam'>
      Hello {obj.name}, {obj.age}
    </div>
  );
}

export default App;
