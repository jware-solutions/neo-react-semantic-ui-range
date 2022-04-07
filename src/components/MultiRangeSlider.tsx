// Components
import { SliderTracks } from './SliderTracks'

// Utils
import { decimalCount } from '../utils/utils'

// Types
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
    step = 1,
    minValue,
    maxValue,
    onChange,
    margin = 0,
    showLabels = false,
    disabled = false,
    inverted = false,
    color = 'green',
    style
  } = props

  /**
   * Returns the selected slice of the slider, in percent from 0 to 100.
   *
   * @param value - New value set on the slider.
   * @returns Percent of the slider that need to be colored, from 0 to 100.
   */
  const getPercent = (value: number) => Math.round(((value - defaultMinValue) / (defaultMaxValue - defaultMinValue)) * 100)

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
    if (showLabels && minValue !== undefined && maxValue !== undefined) {
      return (
        <>
          <div className="slider__left-value">{minValue.toFixed(decimalCount(step))}</div>
          <div className="slider__right-value">{maxValue.toFixed(decimalCount(step))}</div>
        </>
      )
    }
  }

  const minPercent = getPercent(minValue)
  const maxPercent = getPercent(maxValue)
  const left = `${minPercent}%`
  const width = `${maxPercent - minPercent}%`
  const disabledClass = disabled ? 'disabled' : ''

  return (
    <div className='slider-parent' style={style}>
      <input
        type="range"
        min={defaultMinValue}
        max={defaultMaxValue}
        value={minValue}
        disabled={disabled}
        onChange={(event) => {
          handleChange(parseFloat(event.target.value), maxValue)
        }}
        className={`thumb thumb--left ${disabledClass}`}
      />
      <input
        type="range"
        step={step}
        min={defaultMinValue}
        max={defaultMaxValue}
        value={maxValue}
        disabled={disabled}
        onChange={(event) => {
          handleChange(minValue, parseFloat(event.target.value))
        }}
        className={`thumb thumb--right ${disabledClass}`}
      />

      <SliderTracks
        left={left}
        width={width}
        color={color}
        disabled={disabled}
        inverted={inverted}
      >
        {renderLabels()}
      </SliderTracks>
    </div>
  )
}

export { MultiRangeSlider }
export type { MultiRangeSliderProps }
