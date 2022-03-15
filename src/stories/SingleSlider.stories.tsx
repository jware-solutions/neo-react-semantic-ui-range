import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SingleRangeSlider, SingleRangeSliderProps } from '../components/SingleRangeSlider'
import { useEffect, useState } from 'react'

export default {
  title: 'Example/SingleSlider',
  component: SingleRangeSlider,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof SingleRangeSlider >

const Template: ComponentStory<typeof SingleRangeSlider> = (args: SingleRangeSliderProps) => {
  const [value, setValue] = useState<number>()

  useEffect(() => {
    setValue(args.actualValue)
  }, [args.actualValue])

  /**
   * Handles changes.
   *
   * @param newValue - New value.
   */
  function handleChange (newValue: number) {
    setValue(newValue)
  }

  const props: SingleRangeSliderProps = { ...args, actualValue: value, onChange: handleChange }
  return <SingleRangeSlider {...props} />
}

export const Basic = Template.bind({})
Basic.args = {
  showLabels: true,
  actualValue: 40,
  defaultMinValue: 0,
  defaultMaxValue: 100,
  color: 'Salmon'
}
