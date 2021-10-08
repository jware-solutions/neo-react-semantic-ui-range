type updateCurrentValueFunctionType = (newActualValue : number) => any; 

interface SingleRangeSliderProps {
    defaultMinValue: number,
    defaultMaxValue: number,
    actualValue: number
    color?: "green" | "cyan"
    onChange: updateCurrentValueFunctionType
}

const SingleRangeSlider = function (props: SingleRangeSliderProps) {
    const {defaultMinValue, defaultMaxValue, actualValue, color = 'green', onChange} = props; 

    const handleValueChange = (newValue:number) => {
        if (newValue >= defaultMinValue && newValue <= defaultMaxValue){
            onChange(newValue);
        }
    }

    const getSelectedSliderPercent = (newValue:number) => {
        return (newValue / defaultMaxValue) * 100;
    }

    const selectedPercent = `${getSelectedSliderPercent(actualValue)}%`

    return (
        <>
            <input type="range"
                min={defaultMinValue}
                max={defaultMaxValue}
                value={actualValue}
                onChange={event => {
                    handleValueChange(parseInt(event.target.value));
                }}
                className="thumb thumb--left"
            />
              <div className="slider">
                <div className="slider__track"/>
                <div className="slider__left-value">{actualValue}</div>
                <div style={{width:selectedPercent}} className={`slider__range slider__range__${color}`} />
            </div>
        </>
    )
}

export {SingleRangeSlider}; 