import { ComponentProps, createElement } from 'react';

export interface LegendProps extends ComponentProps<'legend'> {}

function Legend(props: LegendProps) {
  return createElement('legend', props);
}

export default Legend;
