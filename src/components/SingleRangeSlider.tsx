import { SliderProps } from '../types'

// Styles
import '../styles.css'

/** Component props. */
interface SingleRangeSliderProps extends SliderProps {
  /** Starting value set on the slider. */
  actualValue: number;
  /** Callback function that will be invoked when `actualValue` changes. */
  onChange: (newActualValue: number) => any;
}

/**
 * A single slider.
 *
 * @param props - Component props.
 * @returns Component.
 */
const SingleRangeSlider = function (props: SingleRangeSliderProps) {
  const { defaultMinValue, defaultMaxValue, actualValue, color = 'Green', showLabels = false, onChange } = props

  /**
   * Invokes callback function if slider value is updated.
   *
   * @param newValue - New value set on the slider.
   */
  const handleValueChange = (newValue: number) => {
    if (newValue >= defaultMinValue && newValue <= defaultMaxValue) {
      onChange(newValue)
    }
  }

  /**
   * Returns the selected slice of the slider, in percent from 0 to 100.
   *
   * @param newValue - New value set on the slider.
   * @returns Percent of the slider that need to be colored, from 0 to 100.
   */
  const getSelectedSliderPercent = (newValue: number) => {
    return (newValue / defaultMaxValue) * 100
  }

  /**
   * If `showLabels` is `true`, returns a `<div>` that contains a label with the current value of the slider.
   *
   * @returns Div with label.
   */
  const renderLabels = () => {
    // TODO: refactor to just return the div
    if (showLabels) {
      return (
        <>
          <div className="slider__left-value">{actualValue}</div>
        </>
      )
    }
  }

  const selectedPercent = `${getSelectedSliderPercent(actualValue)}%`

  return (
    <>
      <input
        type="range"
        min={defaultMinValue}
        max={defaultMaxValue}
        value={actualValue}
        onChange={(event) => {
          handleValueChange(parseInt(event.target.value))
        }}
        className="thumb thumb--left"
      />
      <div className="slider">
        <div className="slider__track" />
        {renderLabels()}
        <div style={{ width: selectedPercent, backgroundColor: color }} className={'slider__range'} />
      </div>
    </>
  )
}

export { SingleRangeSlider }
