import { ComponentMeta } from '@storybook/react'
import { SingleRangeSlider } from '../components/SingleRangeSlider'
import { useState } from 'react'
import { RangeColor } from '../types'

// Styles
import './colors.css'

export default {
  title: 'Example/SingleSlider/Colors',
  component: SingleRangeSlider,
  subcomponents: { SingleRangeSlider },
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof SingleRangeSlider >

export const Colors = () => {
  const [value, setValue] = useState<number>(40)

  /**
   * Handles changes.
   *
   * @param newValue - New value.
   */
  function handleChange (newValue: number) {
    setValue(newValue)
  }

  const colors: RangeColor[] = ['RoyalBlue', 'Green', 'BlueViolet', 'Brown', 'Orange', 'Violet', 'Tomato', 'DarkMagenta']
  return colors.map((color) => (
    <h1 key={color}>
      <SingleRangeSlider
        key={color}
        defaultMinValue={0}
        defaultMaxValue={100}
        value={value}
        color={color}
        onChange={handleChange}
      />
    </h1>
  ))
}
