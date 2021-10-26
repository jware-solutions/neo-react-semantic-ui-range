import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {RangeColor} from './types';
import {MultiRangeSlider} from "./components/MultiRangeSlider";
import { SingleRangeSlider } from './components/SingleRangeSlider';
import "./style/multiRangeSlider.css"

const App = () => {
  const [singleSliderValue, setSingleSliderValue] = useState(0);
  /*const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(500)*/

  return (
    /*<MultiRangeSlider defaultMin={0} defaultMax={500} minValue={minValue} maxValue={maxValue} margin={0} color='green'
    onChange={(newActualMin: number, newActualMax: number) => {
        setMinValue(newActualMin);
        setMaxValue(newActualMax); 
      }
    }/>*/
    <SingleRangeSlider defaultMinValue={0} defaultMaxValue={100} actualValue={singleSliderValue} color={RangeColor.Azure} 
      showLabels={true} onChange={(actualValue:number) => {setSingleSliderValue(actualValue)}}
    />
  )
}

ReactDOM.render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
