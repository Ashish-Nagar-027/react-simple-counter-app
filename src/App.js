
import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0)
  return (
    <div className="App">
     <h2>Simple Counter App React.js</h2>
     <div className='counter'>
        <button className='increase-btn' onClick={()=> setNum(num+1)}>+</button>
        <span className={num < 0 ? 'negative-num' : 'positive-num'}>{num}</span>
        <button className='decrease-btn' onClick={()=> setNum(num-1)}>-</button>
     </div>
    </div>
  );
}

export default App;
