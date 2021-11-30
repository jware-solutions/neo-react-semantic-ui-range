/* eslint-disable react/react-in-jsx-scope */
import { RangeColor } from "../types";

type updateCurrentValueFunctionType = (newActualValue: number) => any;

interface SingleRangeSliderProps {
  defaultMinValue: number;
  defaultMaxValue: number;
  actualValue: number;
  color?: RangeColor;
  showLabels?: boolean;
  onChange: updateCurrentValueFunctionType;
}

const SingleRangeSlider = function (props: SingleRangeSliderProps) {
  const {
    defaultMinValue,
    defaultMaxValue,
    actualValue,
    color = "Green",
    showLabels = false,
    onChange,
  } = props;

  const handleValueChange = (newValue: number) => {
    if (newValue >= defaultMinValue && newValue <= defaultMaxValue) {
      onChange(newValue);
    }
  };

  const getSelectedSliderPercent = (newValue: number) => {
    return (newValue / defaultMaxValue) * 100;
  };

  const selectedPercent = `${getSelectedSliderPercent(actualValue)}%`;

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
        <div
          style={{ width: selectedPercent, backgroundColor: color }}
          className={"slider__range"}
        />
      </div>
    </>
  );
};

export { SingleRangeSlider };
