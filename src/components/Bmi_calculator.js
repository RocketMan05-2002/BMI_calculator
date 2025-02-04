import React, { useMemo, useState } from 'react'
import './styles.css'

const App = () => {

    const[weight,setWeight] = useState(80);
    const[height,setHeight] = useState(184);

    const handleweight = (e) =>{
        setWeight(e.target.value);
    }
    const handleheight = (e) =>{
        setHeight(e.target.value);
    }

    const output = useMemo(()=>{
        const hm = height/100;
        return (weight/(hm*hm)).toFixed(1);
    },[weight,height]);

  return (
    <div>
      <main className='container'>
        <h1>BMI Calculator</h1>
        <div className='input-section'>
            <div className='slider-output'>
                Weight : {weight} kg
            </div>
            <input className='input-slider'
            type='range'
            step='1'
            min='20'
            max='200'
            onChange={handleweight}
            />
            <br/>
            <div className='slider-output'>
                Height : {height} cm
            </div>
            <input className='input-slider'
            type='range'
            step='1'
            min='50'
            max='250'
            onChange={handleheight}
            />
            <br/>
        </div>
        {/* ---- */}
        <div className='output-section'>
            <p>Your BMI is </p>
            <p className='output'>{output}</p>
        </div>
        {output<20 && <p>Gain some muscles broski!</p>}
        {output>25 && <p>You are overweight! :))</p>}
        {(output>20 && output<=25) && <p>You are in shape</p>}
      </main>
    </div>
  )
}

export default App
