import { CSSProperties } from 'react'

/** Allowed colors. */
type RangeColor = 'red' |
    'orange' |
    'yellow' |
    'olive' |
    'green' |
    'teal' |
    'blue' |
    'violet' |
    'purple' |
    'pink' |
    'brown' |
    'grey' |
    'black'

interface SliderProps {
    /** Minimum value that can be set on the slider. */
    defaultMinValue: number;
    /** Maximum value that can be set on the slider. */
    defaultMaxValue: number;
    /** Color of the selected slice of the slider. Default to 'green'. */
    color?: RangeColor;
    /** Indicates if minimum/maximum values labels should be shown. Default to `false`. */
    showLabels?: boolean;
    /** Step to change slider value. Default to 1. */
    step?: number;
    /** Disables slider and prevents changes.  Default to `false`. */
    disabled?: boolean;
    /** A slider can have its colors inverted for contrast on a dark background. Default to `false`. */
    inverted?: boolean;
    /** Component custom styles. */
    style?: CSSProperties;
}

export type { RangeColor, SliderProps }
