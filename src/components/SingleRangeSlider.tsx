/* eslint-disable react/react-in-jsx-scope */
import "../style/multiRangeSlider.css";
import { RangeColor } from "../types/range-colors";

/**
 * @param {number} newActualValue - Function to be invoked when the value of the slider changes
 * @returns {any} - Return value defined in the function
 */
type updateCurrentValueFunctionType = (newActualValue: number) => any;

/**
 * @param {number} defaultMinValue - Minimum value that can be setted on the slider
 * @param {number} defaultMaxValue - Maximum value that can be setted on the slider
 * @param {number} actualValue - Starting value setted on the slider
 * @param {RangeColor} [color = Green] - Color of the selected slice of the slider
 * @param {boolean} [showLabels = false] - Indicates if minimum/maximum values labels should be shown
 * @param {updateCurrentValueFunctionType} onChange - Callback function that will be invoked when {actualValue} changes
 */
interface SingleRangeSliderProps {
  defaultMinValue: number;
  defaultMaxValue: number;
  actualValue: number;
  color?: RangeColor;
  showLabels?: boolean;
  onChange: updateCurrentValueFunctionType;
}

const SingleRangeSlider = function (props: SingleRangeSliderProps) {
  const { defaultMinValue, defaultMaxValue, actualValue, color = "Green", showLabels = false, onChange } = props;

  /**
   * Invokes callback function if slider value is updated.
   *
   * @param {number} newValue - New value setted on the slider
   */
  const handleValueChange = (newValue: number) => {
    if (newValue >= defaultMinValue && newValue <= defaultMaxValue) {
      onChange(newValue);
    }
  };

  /**
   * Returns the selected slice of the Slider, in percent from 0 to 100
   *
   * @param {number} newValue - New value setted on the slider
   * @returns {number} - percent of the slider that need to be colored, from 0 to 100
   */
  const getSelectedSliderPercent = (newValue: number) => {
    return (newValue / defaultMaxValue) * 100;
  };

  const selectedPercent = `${getSelectedSliderPercent(actualValue)}%`;

  /**
   * If {showLabels} is true, returns <div> that constains a label with the current value of the Slider
   *
   * @returns {HTMLElement} <div> with label
   */
  const renderLabels = () => {
    if (showLabels) {
      return (
        <>
          <div className="slider__left-value">{actualValue}</div>
        </>
      );
    }
  };

  return (
    <>
      <input
        type="range"
        min={defaultMinValue}
        max={defaultMaxValue}
        value={actualValue}
        onChange={(event) => {
          handleValueChange(parseInt(event.target.value));
        }}
        className="thumb thumb--left"
      />
      <div className="slider">
        <div className="slider__track" />
        {renderLabels()}
        <div style={{ width: selectedPercent, backgroundColor: color }} className={"slider__range"} />
      </div>
    </>
  );
};

export { SingleRangeSlider };
