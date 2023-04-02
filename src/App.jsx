import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PriceList from './components/PriceList/PriceList';
import Dashboard from './components/Dashboard/Dashboard';
import PhoneBar from './components/PhoneBar/PhoneBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Navbar />
      <PriceList />
      <Dashboard />
      <PhoneBar />
    </div>
  );
}

export default App
