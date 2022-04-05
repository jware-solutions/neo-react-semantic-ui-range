import { ComponentMeta } from '@storybook/react'
import { SingleRangeSlider } from '../components/SingleRangeSlider'
import { useState } from 'react'
import { RangeColor } from '../types'

// Styles
import './colors.css'

export default {
  title: 'Example/SingleSlider/Inverted',
  component: SingleRangeSlider,
  subcomponents: { SingleRangeSlider },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    }
  }
} as ComponentMeta<typeof SingleRangeSlider >

export const Inverted = () => {
  const [value, setValue] = useState<number>(40)

  /**
   * Handles changes.
   *
   * @param newValue - New value.
   */
  function handleChange (newValue: number) {
    setValue(newValue)
  }

  const colors: RangeColor[] = ['blue', 'green', 'red', 'brown', 'orange', 'violet', 'yellow', 'teal']
  return colors.map((color) => (
    <h1 key={color}>
      <SingleRangeSlider
        key={color}
        defaultMinValue={0}
        defaultMaxValue={100}
        value={value}
        color={color}
        inverted={true}
        onChange={handleChange}
      />
    </h1>
  ))
}
