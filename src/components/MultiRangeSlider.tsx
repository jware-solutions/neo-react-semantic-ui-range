import "../style/multiRangeSlider.css"
import {RangeColor} from '../types'

//TODO: Flag para mostrar u ocultar los labels, recibirlos por props. defecto: no mostrar. 
//      FIX valores con coma. 
//      ADD single slider.

type updateCurrentValuesFunctionType = (newActualMin: number, newActualMax: number) => any

interface MultiRangeSliderProps {
    /**
     * 
     */
    defaultMin: number,
    defaultMax: number,
    minValue: number,
    maxValue: number;
    margin?: number;
    color?: RangeColor,
    showLabels?: boolean,
    onChange: updateCurrentValuesFunctionType
};

/**
 * 
 * @param props 
 * @returns 
 */
const MultiRangeSlider = function(props : MultiRangeSliderProps){
    const {defaultMin, defaultMax, minValue, maxValue, onChange, margin = 0, showLabels = false, color = RangeColor.Green} = props;

    // Convert to percentage
    const getPercent = (value:number) => {
        return Math.round(((value - defaultMin) / (defaultMax - defaultMin)) * 100);
    }

    /**
     * Handle Status Changes
     * @param newMinValue new min value selected from the input.
     * @param newMaxValue new max value selected from the input.
     */
    const handleChange = (newMinValue:number, newMaxValue:number) => {
        if (newMinValue + margin > newMaxValue || newMaxValue - margin < newMinValue){
            return; 
        }
        onChange(newMinValue, newMaxValue)
    }

    const renderLabels = () => {
        if (showLabels){
            return <>
                <div className="slider__left-value">{minValue}</div>
                <div className="slider__right-value">{maxValue}</div>
            </>
        }
    }

    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(maxValue);
    const left = `${minPercent}%`;
    const width = `${maxPercent - minPercent}%`;
    return (
        <>
            <input
                type="range"
                min={defaultMin}
                max={defaultMax}
                value={minValue}
                onChange={event => {
                    handleChange(parseInt(event.target.value), maxValue);
                }}
                className="thumb thumb--left"
            />
            <input
                type="range"
                min={defaultMin}
                max={defaultMax}
                value={maxValue}
                onChange={event => {
                    handleChange(minValue, parseInt(event.target.value));
                }}
                className="thumb thumb--right"
            />
            <div className="slider">
                <div className="slider__track"/>
                {renderLabels()}
                <div style={{left: left, width:width, backgroundColor:color}} className={"slider__range"} />
            </div>
        </>
    );
}

export {MultiRangeSlider};