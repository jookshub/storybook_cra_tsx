module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-viewport",
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ]
};
