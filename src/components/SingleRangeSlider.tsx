import { SliderProps } from '../types'

// Styles
import '../styles.css'

/** Component props. */
interface SingleRangeSliderProps extends SliderProps {
  /** The value set on the slider. */
  value: number;
  /** Callback function that will be invoked when `value` changes. */
  onChange: (newValue: number) => any;
}

/**
 * A single slider.
 *
 * @param props - Component props.
 * @returns Component.
 */
const SingleRangeSlider = function (props: SingleRangeSliderProps) {
  const { defaultMinValue, defaultMaxValue, value, color = 'Green', showLabels = false, onChange } = props

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
    if (showLabels) {
      return <div className="slider__left-value">{value}</div>
    }
  }

  const selectedPercent = `${getSelectedSliderPercent(value)}%`

  return (
    <>
      <input
        type="range"
        min={defaultMinValue}
        max={defaultMaxValue}
        value={value}
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
export type { SingleRangeSliderProps }
