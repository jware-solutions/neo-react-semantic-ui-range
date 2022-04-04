import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useEffect, useState } from 'react'
import { MultiRangeSlider, MultiRangeSliderProps } from '../components/MultiRangeSlider'

export default {
  title: 'Example/MultiSlider',
  component: MultiRangeSlider,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof MultiRangeSlider >

const Template: ComponentStory<typeof MultiRangeSlider> = (args: MultiRangeSliderProps) => {
  const [minValue, setMinValue] = useState<number>()
  const [maxValue, setMaxValue] = useState<number>()

  useEffect(() => {
    setMinValue(args.minValue)
  }, [args.minValue])

  useEffect(() => {
    setMaxValue(args.maxValue)
  }, [args.maxValue])

  /**
   * Handles changes.
   *
   * @param newActualMin - New min value.
   * @param newActualMax - New max value.
   */
  function handleChange (newActualMin: number, newActualMax: number) {
    setMinValue(newActualMin)
    setMaxValue(newActualMax)
  }

  const props: MultiRangeSliderProps = { ...args, minValue, maxValue, onChange: handleChange }
  return <MultiRangeSlider {...props} />
}

export const Basic = Template.bind({})
Basic.args = {
  showLabels: true,
  step: 1,
  minValue: 30,
  maxValue: 70,
  defaultMinValue: 0,
  defaultMaxValue: 100,
  margin: 0,
  color: 'Orange'
}
