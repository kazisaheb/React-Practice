import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return <div className='App'>

    <Clock />
  </div>
}

// User loading
function ExUser() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return <div>
    {
      users.map(user => <div className='Users' >

        <h1>Name: {user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Address: {user.address.street} , {user.address.city} </p>
        <Count />
      </div>)
    }

  </div>
}

//Counter componant
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

// React clock
function Clock() {
  const [time, setTime] = useState()
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);
  }, [])
  return <div>
    <h1>Current time: {time}</h1>
  </div>
}

export default App;