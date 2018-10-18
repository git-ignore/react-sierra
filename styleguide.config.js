const path = require("path");
const { createConfig, babel } = require("webpack-blocks");

module.exports = {
  webpackConfig: createConfig([babel()]),
  title: "react-sierra",
  components: "src/components/**/index.jsx",
  propsParser() {
    // disable props parsing because of https://github.com/reactjs/react-docgen/issues/33
    // in order to specify it manually in component's readme.md
    return {};
  }
};
