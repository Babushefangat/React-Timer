import {useState} from 'react';

let totalDuration = 0;
let offset = 0;
let intervalId;
function App() {
  const [enteredDuration, setEnteredDuration] = useState("");
  const durationHandler = (e)=>{ 
    setEnteredDuration(e.target.value);
    // console.log(enteredDuration)
  };
  offset = 565*enteredDuration/totalDuration-565;
  
  const tick = function () {
    if (offset > -565)
      setEnteredDuration(
        (prevState)=>{return prevState-1},
        console.log(enteredDuration)
        );
    else clearInterval(intervalId)
    }   


  const startHandler = function (){
    totalDuration = enteredDuration;
    tick();
    intervalId=setInterval(tick, 1000)
  }
  
  const pauseHandler = function (){
    clearInterval(intervalId);
  }

  return (
    <div>
      <div>TIMER</div>
      <div>
        <svg height="200" width="200">
          <circle stroke-dashoffset={offset} r="90" cx="100" cy="100" stroke="blue" stroke-width="10" fill="transparent" stroke-dasharray="565" transform="rotate(-90 100 100)" />
        </svg>
      </div>
      <div>
        <label for="duration">Duration</label>
        <input type="text" id="duration" value={enteredDuration} onChange={durationHandler} required />
      </div>
      <div>
        <button id="start" onClick={startHandler} >Start</button>
        <button id="pause" onClick={pauseHandler}>Pause</button>
      </div>
    </div>
  );
}

export default App;
