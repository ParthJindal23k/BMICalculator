import React, { use, useMemo, useState } from 'react'
import './App.css';

const App = () => {

  const [weight,setweight] = useState(120);
  const [height , setheight] = useState(200)

  const onheightchange = (event) =>{
    setheight(event.target.value);
  }

  const onweightchange = (event) =>{
    setweight(event.target.value);
  }


  const output = useMemo(() =>{

    const calcheight = height/100;

    return (weight/(calcheight*calcheight)).toFixed(1);

  },[weight,height] )

  return (
    <main>
        <h1>Project : BMI Calculator </h1>
        <div className='input-section'>
          <p className='slider-output'>Weight : {weight}Kg</p>
          <input className='input-slider' type='range'  step={1} min={40} max={200} onChange={onweightchange} />
          <p className='slider-output'>Height : {height}cm</p>
          <input className='input-slider' type='range' step={1} min={160}  max={240}  onChange={onheightchange} />
        </div>

        <div className='output-section'>
          <p>Your BMI is </p>
          <p className='output'>{output}</p>

        </div>
    </main>
  )
}

export default App
