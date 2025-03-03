import { useState } from 'react'
import './App.css'

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <>
      <div className='w-full bg-white p-10 px-5 rounded-lg space-y-3'>
        <h1 className='lg:text-4xl text-2xl font-bold'>Random Number Generator</h1>
        <h4 className='lg:text-xl text-wrap'>Click the button to generate and display a random number</h4>
        <button onClick={generateRandomNumber} className="bg-[#5272EB] text-white p-2 text-xl rounded">
          Generate Random Number
        </button>
        <p className='text-2xl'>Random Number: {randomNumber}</p>
      </div>
    </>
  )
}

export default App
