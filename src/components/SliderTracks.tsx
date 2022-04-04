/** Component props. */
interface SliderTracksProps {
  /** Labels component. */
  children: JSX.Element;
  /** Left offset. */
  left?: string;
  /** Track width. */
  width: string;
  /** Track color. */
  backgroundColor: string;
  /** Disabled prop. */
  disabled: boolean;
}

/**
 * Render Slider track with custom color, left offset and width.
 *
 * @param props - Component props.
 * @returns Component.
 */
const SliderTracks = (props: SliderTracksProps) => {
  const disabledClass = props.disabled ? 'disabled' : ''

  return (
    <div className="slider">
        <div className={`slider__track ${disabledClass}`} />
        {props.children}
        <div style={{ left: props.left, width: props.width, backgroundColor: props.backgroundColor }} className={`slider__range ${disabledClass}`} />
    </div>
  )
}

export { SliderTracks }
