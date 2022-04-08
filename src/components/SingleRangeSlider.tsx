// Components
import { SliderTracks } from './SliderTracks'

// Utils
import { decimalCount } from '../utils/utils'

// Types
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
  const {
    defaultMinValue,
    defaultMaxValue,
    value,
    color = 'green',
    showLabels = false,
    step = 1,
    disabled = false,
    inverted = false,
    style,
    id,
    className = '',
    onChange
  } = props

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
  const getSelectedSliderPercent = (newValue: number) => newValue / defaultMaxValue * 100

  /**
   * If `showLabels` is `true`, returns a `<div>` that contains a label with the current value of the slider.
   *
   * @returns Div with label.
   */
  const renderLabels = () => {
    if (showLabels && value !== undefined) {
      return <div className="slider__left-value">{value.toFixed(decimalCount(step))}</div>
    }
  }

  const selectedPercent = `${getSelectedSliderPercent(value)}%`
  const disabledClass = disabled ? 'disabled' : ''

  return (
    <div id={id} className={`slider-parent ${className}`} style={style}>
      <input
        type="range"
        min={defaultMinValue}
        max={defaultMaxValue}
        value={value}
        step={step}
        disabled={disabled}
        onChange={(event) => {
          handleValueChange(parseFloat(event.target.value))
        }}
        className={`thumb thumb--left ${disabledClass}`}
      />

      <SliderTracks width={selectedPercent} color={color} disabled={disabled} inverted={inverted}>
        {renderLabels()}
      </SliderTracks>
    </div>
  )
}

export { SingleRangeSlider }
export type { SingleRangeSliderProps }
