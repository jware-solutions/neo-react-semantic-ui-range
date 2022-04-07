import { ComponentMeta } from '@storybook/react'
import { SingleRangeSlider } from '../components/SingleRangeSlider'
import { MultiRangeSlider } from '../components/MultiRangeSlider'
import { useState } from 'react'
import { Container, Form, Grid, Label } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

// Styles
import './semantic.css'

export default {
  title: 'Example/SingleSlider/Semantic',
  component: SingleRangeSlider,
  subcomponents: { SingleRangeSlider },
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof SingleRangeSlider>

export const SemanticGrid = () => {
  const [valueSingle, setValueSingle] = useState<number>(40)
  const [[minValue, maxValue], setValuesMulti] = useState<[number, number]>([30, 80])

  /**
   * Handles changes on single range sliders.
   *
   * @param newValue - New value.
   */
  function handleChangeOnSingle (newValue: number) {
    setValueSingle(newValue)
  }

  /**
   * Handles changes on multi range sliders.
   *
   * @param newMinValue - New min value.
   * @param newMaxValue - New max value.
   */
  function handleChangeOnMulti (newMinValue: number, newMaxValue: number) {
    setValuesMulti([newMinValue, newMaxValue])
  }

  return (
    <Grid>
      <Grid.Row columns={1}>
        <Grid.Column>
          <h2>You can use Sliders inside <a href='https://react.semantic-ui.com/collections/grid/' target='_blank' rel='noreferrer'>Semantic-UI grids</a></h2>
        </Grid.Column>
      </Grid.Row>

      {/* Single range slider */}
      <Grid.Row columns={1} style={{ marginTop: '2%' }}>
        <Grid.Column>
          <h3>Single range (current value = {valueSingle})</h3>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2}>
        <Grid.Column>
          <SingleRangeSlider
            defaultMinValue={0}
            defaultMaxValue={100}
            value={valueSingle}
            color='blue'
            onChange={handleChangeOnSingle}
          />
          <Label color="blue" pointing='above' className="slider-label label-left">0</Label>
          <Label color="blue" pointing='above' className="slider-label label-right">100</Label>
        </Grid.Column>

        <Grid.Column>
          <SingleRangeSlider
            defaultMinValue={0}
            defaultMaxValue={100}
            value={valueSingle}
            color='red'
            onChange={handleChangeOnSingle}
          />
        </Grid.Column>
      </Grid.Row>

      {/* Multi range slider */}
      <Grid.Row columns={1} style={{ marginTop: '2%' }}>
        <Grid.Column>
          <h3>Multi range (current values = {minValue} - {maxValue})</h3>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2}>
        <Grid.Column>
          <MultiRangeSlider
            defaultMinValue={0}
            defaultMaxValue={100}
            minValue={minValue}
            maxValue={maxValue}
            color='blue'
            onChange={handleChangeOnMulti}
          />
        </Grid.Column>

        <Grid.Column>
          <MultiRangeSlider
            defaultMinValue={0}
            defaultMaxValue={100}
            minValue={minValue}
            maxValue={maxValue}
            color='red'
            onChange={handleChangeOnMulti}
          />

          <Label color="red" pointing='above' className="slider-label label-left">0</Label>
          <Label color="red" pointing='above' className="slider-label label-right">100</Label>
        </Grid.Column>
      </Grid.Row>
    </Grid>)
}

export const SemanticForm = () => {
  const [value, setValue] = useState<number>(40)

  /**
   * Handles changes.
   *
   * @param newValue - New value.
   */
  function handleChange (newValue: number) {
    setValue(newValue)
  }

  return (
    <Container>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input fluid label='First name' placeholder='First name' />
                <Form.Input fluid label='Last name' placeholder='Last name' />
              </Form.Group>
              <Form.Group inline>
                <label>Size</label>
                <Form.Radio
                  label='Small'
                  value='sm'
                  checked
                />
                <Form.Radio
                  label='Medium'
                  value='md'
                />
                <Form.Radio
                  label='Large'
                  value='lg'
                />
              </Form.Group>
              <Form.Group>
                <SingleRangeSlider
                  defaultMinValue={0}
                  defaultMaxValue={100}
                  value={value}
                  color='red'
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Checkbox label='I agree to the Terms and Conditions' />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}
