import { useState } from 'react';
import './App.css';
import Counter from './assets/counter';

const User = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>My Name is {name}</h1>
    </div>
  );
};

function App() {
  const [name] = useState('Zalfa Destian Ramadhani');

  return (
    <div className="App">
      <div>
        <h1 className="title">React Component</h1>
        <User name={name} />
        <Counter initialCount={0} />
      </div>
    </div>
  );
}

export default App;
