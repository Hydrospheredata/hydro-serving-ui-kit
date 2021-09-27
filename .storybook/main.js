module.exports = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "storybook-addon-pseudo-states"
  ],
  "core": {
    "builder": "webpack5"
  }
}
