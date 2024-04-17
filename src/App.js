import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {

  const [isRunning, setIsRunning] = useState(false)
  const [elapsedtime, setElapsedTime] = useState(0)

  const intervalIdRef = useRef()
  const startTimeRef = useRef()


  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current)
      },)
    }


    return () => {
      clearInterval(intervalIdRef.current)
    }




  }, [isRunning]
  )


  function handleStart() {

    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedtime

  }

  function handleStop() {
    setIsRunning(false)


  }
  function handleReset() {
    setElapsedTime(0)
    setIsRunning(false)
  }
  function timeSetting() {


    let hours = Math.floor(elapsedtime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedtime / (1000 * 60) % 60)
    let seconds = Math.floor(elapsedtime / (1000) % 60)
    let miliseconds = Math.floor((elapsedtime % 1000) / 10)

    return ` ${hours} :${minutes} :${seconds} : ${miliseconds}`



  }


  return (

    <div>
      <div>{timeSetting()}</div><br></br>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset  </button>

    </div>
  )
}

export default App;
