import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Time`.
 */
export type TimeProps = SliceComponentProps<Content.TimeSlice>;

/**
 * Component for "Time" Slices.
 */
const Time = ({ slice }: TimeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for time (variation: {slice.variation}) Slices
    </section>
  );
};

export default Time;
