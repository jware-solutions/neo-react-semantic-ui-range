import { SliderProps } from '../types'

// Styles
import '../style/multiRangeSlider.css'

interface MultiRangeSliderProps extends SliderProps {
  /** Starting minium value set on the slider. */
  minValue: number;
  /** Starting maximum value set on the slider. */
  maxValue: number;
  /** Minimum difference between minimum and maximum values set. */
  margin?: number;
  /** Callback function that will be invoked when 'actualValue' changes. */
  onChange: (newActualMin: number, newActualMax: number) => any;
}

const MultiRangeSlider = function (props: MultiRangeSliderProps) {
  const { defaultMinValue: defaultMin, defaultMaxValue: defaultMax, minValue, maxValue, onChange, margin = 0, showLabels = false, color = 'Green' } = props

  /**
   * Returns the selected slice of the Slider, in percent from 0 to 100.
   *
   * @param value - New value set on the slider.
   * @returns Percent of the slider that need to be colored, from 0 to 100.
   */
  const getPercent = (value: number) => {
    return Math.round(((value - defaultMin) / (defaultMax - defaultMin)) * 100)
  }

  /**
   * Invokes callback function if slider value is updated.
   *
   * @param newMinValue - New minimum value set on the slider.
   * @param newMaxValue - New maximum value set on the slider.
   */
  const handleChange = (newMinValue: number, newMaxValue: number) => {
    if (newMinValue + margin > newMaxValue || newMaxValue - margin < newMinValue) {
      return
    }
    onChange(newMinValue, newMaxValue)
  }

  /**
   * If 'showLabels' is true, returns <div> that contains a labels with the current maximum and minimum values of the Slider.
   *
   * @returns Div element with labels.
   */
  const renderLabels = () => {
    if (showLabels) {
      return (
        <>
          <div className="slider__left-value">{minValue}</div>
          <div className="slider__right-value">{maxValue}</div>
        </>
      )
    }
  }

  const minPercent = getPercent(minValue)
  const maxPercent = getPercent(maxValue)
  const left = `${minPercent}%`
  const width = `${maxPercent - minPercent}%`
  return (
    <>
      <input
        type="range"
        min={defaultMin}
        max={defaultMax}
        value={minValue}
        onChange={(event) => {
          handleChange(parseInt(event.target.value), maxValue)
        }}
        className="thumb thumb--left"
      />
      <input
        type="range"
        min={defaultMin}
        max={defaultMax}
        value={maxValue}
        onChange={(event) => {
          handleChange(minValue, parseInt(event.target.value))
        }}
        className="thumb thumb--right"
      />
      <div className="slider">
        <div className="slider__track" />
        {renderLabels()}
        <div style={{ left: left, width: width, backgroundColor: color }} className={'slider__range'} />
      </div>
    </>
  )
}

export { MultiRangeSlider }
