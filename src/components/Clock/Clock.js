import './Clock.css';
import { useEffect, useState } from 'react';

function Clock() {
  const [time, setTime] = useState()
  useEffect(() => setInterval(() => setTime(new Date().toLocaleTimeString()), 1000), [])
  return <h1 className='clock'>Current time: {time}</h1>
}

export default Clock