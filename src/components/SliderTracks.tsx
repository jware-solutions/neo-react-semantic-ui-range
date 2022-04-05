import { RangeColor } from '../types'

/** Component props. */
interface SliderTracksProps {
  /** Labels component. */
  children: JSX.Element;
  /** Left offset. */
  left?: string;
  /** Track width. */
  width: string;
  /** Track color. */
  color: RangeColor;
  /** Disabled prop. */
  disabled: boolean;
  /** Inverted prop. */
  inverted: boolean;
}

/**
 * Render Slider track with custom color, left offset and width.
 *
 * @param props - Component props.
 * @returns Component.
 */
const SliderTracks = (props: SliderTracksProps) => {
  const disabledClass = props.disabled ? 'disabled' : ''
  const invertedClass = props.inverted ? 'inverted' : ''
  const colorClass = props.inverted ? `${invertedClass}-${props.color}` : props.color

  return (
    <div className={`slider ${invertedClass}`}>
        <div className={`slider__track ${disabledClass} ${invertedClass}`} />
        {props.children}
        <div
          style={{ left: props.left, width: props.width }}
          className={`color_track slider__range ${disabledClass} ${colorClass}`}
        />
    </div>
  )
}

export { SliderTracks }
