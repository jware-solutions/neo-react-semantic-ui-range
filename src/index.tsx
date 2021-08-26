import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {MultiRangeSlider} from "./components/MultiRangeSlider";

const App = () => {
  const [minValue, setMinValue] = useState(38)
  const [maxValue, setMaxValue] = useState(500)

  return (
    <MultiRangeSlider defaultMin={24} defaultMax={506} minValue={minValue} maxValue={maxValue} margin={50} color='cyan'
    onChange={(newActualMin: number, newActualMax: number) => {
        setMinValue(newActualMin);
        setMaxValue(newActualMax); 
      }
    }/>
  )
}

ReactDOM.render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
