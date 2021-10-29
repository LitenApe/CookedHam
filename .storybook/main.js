module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/preset-create-react-app',
    'storybook-addon-performance/register',
  ],
  typescript: {
    reactDocgen: 'none',
  },
};
