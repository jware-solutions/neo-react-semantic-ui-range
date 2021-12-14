/* eslint-disable react/react-in-jsx-scope */
import "../style/multiRangeSlider.css";
import { RangeColor } from "../types/range-colors";

/**
 * @param {number} newActualValue - Function to be invoked when the value of the slider changes
 * @returns {any} - Return value defined in the function
 */
type updateCurrentValuesFunctionType = (newActualMin: number, newActualMax: number) => any;

/**
 * @param {number} defaultMin - Minimum value that can be setted on the slider
 * @param {number} defaultMax - Maximum value that can be setted on the slider
 * @param {number} minValue - Starting minium value setted on the slider
 * @param {number} maxValue - Starting maximum value setted on the slider
 * @param {number} [margin = 0] - Minimum difference between minimum and maximum values setted
 * @param {RangeColor} [color = Green] - Color of the selected slice of the slider
 * @param {boolean} [showLabels = false] - Indicates if minimum/maximum values labels should be shown
 * @param {updateCurrentValuesFunctionType} onChange - Callback function that will be invoked when {actualValue} changes
 */
interface MultiRangeSliderProps {
  defaultMin: number;
  defaultMax: number;
  minValue: number;
  maxValue: number;
  margin?: number;
  color?: RangeColor;
  showLabels?: boolean;
  onChange: updateCurrentValuesFunctionType;
}

const MultiRangeSlider = function (props: MultiRangeSliderProps) {
  const { defaultMin, defaultMax, minValue, maxValue, onChange, margin = 0, showLabels = false, color = "Green" } = props;

  /**
   * Returns the selected slice of the Slider, in percent from 0 to 100
   *
   * @param {number} value - New value setted on the slider
   * @returns {number} - percent of the slider that need to be colored, from 0 to 100
   */
  const getPercent = (value: number) => {
    return Math.round(((value - defaultMin) / (defaultMax - defaultMin)) * 100);
  };

  /**
   * Invokes callback function if slider value is updated.
   *
   * @param {number} newMinValue - New minimum value setted on the slider
   * @param {number} newMaxValue - New maximum value setted on the slider
   */
  const handleChange = (newMinValue: number, newMaxValue: number) => {
    if (newMinValue + margin > newMaxValue || newMaxValue - margin < newMinValue) {
      return;
    }
    onChange(newMinValue, newMaxValue);
  };

  /**
   * If {showLabels} is true, returns <div> that constains a labels with the current maximum and minimum values of the Slider
   *
   * @returns {HTMLElement} <div> with labels
   */
  const renderLabels = () => {
    if (showLabels) {
      return (
        <>
          <div className="slider__left-value">{minValue}</div>
          <div className="slider__right-value">{maxValue}</div>
        </>
      );
    }
  };

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
        onChange={(event) => {
          handleChange(parseInt(event.target.value), maxValue);
        }}
        className="thumb thumb--left"
      />
      <input
        type="range"
        min={defaultMin}
        max={defaultMax}
        value={maxValue}
        onChange={(event) => {
          handleChange(minValue, parseInt(event.target.value));
        }}
        className="thumb thumb--right"
      />
      <div className="slider">
        <div className="slider__track" />
        {renderLabels()}
        <div style={{ left: left, width: width, backgroundColor: color }} className={"slider__range"} />
      </div>
    </>
  );
};

export { MultiRangeSlider };
