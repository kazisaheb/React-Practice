import './ExUser.css';
import { useEffect, useState } from 'react';

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
      </div>)
    }

  </div>
}

export default ExUser