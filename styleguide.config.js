const path = require('path');
const upperCamelCase = require('uppercamelcase');
const {createConfig, babel} = require('webpack-blocks');

const PACKAGE_NAME = 'react-skeleton-ui';

module.exports = {
  webpackConfig: createConfig([babel()]),
  title: PACKAGE_NAME,
  components: 'src/components/**/index.jsx',
  getComponentPathLine(filePath) {
    const componentDirName = path.dirname(filePath);
    const componentSourcesFileName = componentDirName.split(path.sep).pop();
    const componentName = upperCamelCase(componentSourcesFileName);
    return `import {${componentName}} from '${PACKAGE_NAME}';`;
  },
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
      color: '#555'
    }
  },
  require: [path.resolve(__dirname, 'styleguide/setup.js')]
};
