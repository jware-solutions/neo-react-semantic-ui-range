import { SliderProps } from '../types'

// Styles
import '../styles.css'

/** Component props. */
interface MultiRangeSliderProps extends SliderProps {
  /** The minimum value set on the slider. */
  minValue: number;
  /** The maximum value set on the slider. */
  maxValue: number;
  /** Minimum difference between minimum and maximum values set. Default to 0. */
  margin?: number;
  /** Callback function that will be invoked when `minValue` or `maxValue` change. */
  onChange: (newMinValue: number, newMaxValue: number) => any;
}

/**
 * A slider with a min and max value.
 *
 * @param props - Components props.
 * @returns Component.
 */
const MultiRangeSlider = function (props: MultiRangeSliderProps) {
  const {
    defaultMinValue,
    defaultMaxValue,
    minValue,
    maxValue,
    onChange,
    margin = 0,
    showLabels = false,
    color = 'Green'
  } = props

  /**
   * Returns the selected slice of the slider, in percent from 0 to 100.
   *
   * @param value - New value set on the slider.
   * @returns Percent of the slider that need to be colored, from 0 to 100.
   */
  const getPercent = (value: number) => {
    return Math.round(((value - defaultMinValue) / (defaultMaxValue - defaultMinValue)) * 100)
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
   * If `showLabels` is `true`, returns a `<div>` that contains a labels with the current maximum and minimum values of the slider.
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
        min={defaultMinValue}
        max={defaultMaxValue}
        value={minValue}
        onChange={(event) => {
          handleChange(parseInt(event.target.value), maxValue)
        }}
        className="thumb thumb--left"
      />
      <input
        type="range"
        min={defaultMinValue}
        max={defaultMaxValue}
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
export type { MultiRangeSliderProps }
