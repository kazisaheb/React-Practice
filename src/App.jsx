import { useState } from 'react';
import './App.css';

function App() {
  return <div className='App'>

    <Count />
    <Count />

  </div>
}

function Count() {
  const [count, setCount] = useState(0)
  const plus = () => setCount(count + 1)
  const down = () => setCount(count - 1)
  return <div>
    <h1>Count: {count}</h1>
    <button onClick={plus}>Plus</button>
    <button onClick={down}>Down</button>
  </div>
}






export default App;