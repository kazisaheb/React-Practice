import './Count.css';
import { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0)
  const plus = () => setCount(count + 1)
  const minus = () => { if (count > 0) { setCount(count - 1) } }
  return <div>
    <h1>Count: {count}</h1>
    <button onClick={minus}>Minus</button>
    <button onClick={plus}>Plus</button>
  </div>
}

export default Count