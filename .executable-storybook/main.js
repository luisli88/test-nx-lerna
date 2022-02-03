const rootMain = require('../.storybook/main');

console.log(rootMain);

module.exports = {
  stories: [...rootMain.stories, '../packages/**/*.stories.(js|jsx|ts|tsx)'],
  core: { ...rootMain.core, builder: 'webpack5' },
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    return config;
  },
};
