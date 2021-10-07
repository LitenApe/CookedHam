import { Meta, Story } from '@storybook/react';
import { ErrorBoundary as Component } from '.';

export default {
  title: 'Atom/ErrorBoundary',
  component: Component,
} as Meta;

const Template: Story = ({ children, ...rest }) => (
  <Component fallback={() => <></>} {...rest}>
    {children}
  </Component>
);

function ErrorThrower(): JSX.Element {
  throw new Error('Error thrown to trigger fallback');
}

export const ErrorBoundary = Template.bind({});
ErrorBoundary.storyName = 'ErrorBoundary';
ErrorBoundary.args = {
  ...ErrorBoundary.args,
  fallback: () => <p>Fallback component rendered</p>,
  children: <ErrorThrower />,
};
