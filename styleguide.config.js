const path = require('path');
const {createConfig, babel} = require('webpack-blocks');

module.exports = {
  webpackConfig: createConfig([babel()]),
  title: 'react-sceleton-ui',
  components: 'src/components/**/index.jsx',
  propsParser() {
    // disable props parsing because of https://github.com/reactjs/react-docgen/issues/33
    // in order to specify it manually in component's readme.md
    return {};
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/components/wrapper')
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Raleway'
        }
      ]
    }
  },
  theme: {
    fontFamily: {
      base:
        '"Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif',
      color: '#222'
    }
  },
  require: [path.resolve(__dirname, 'styleguide/setup.js')]
};
