var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_setup.scss";
          @import "@/assets/scss/_typography.scss";
          @import "@/assets/scss/_generic.scss";
          @import "@/assets/scss/_animations.scss";
        `
      }
    }
  },
  configureWebpack: {
    mode: "production",
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
        minify: {
          collapseWhitespace: false,
          removeComments: true,
          removeRedundantAttributes: false,
          removeScriptTypeAttributes: false,
          useShortDoctype: false,
          removeStyleLinkTypeAttributes: false,
          removeAttributeQuotes: false
        }
      })
    ]
  },
  lintOnSave: false,
  pwa: {
    name: "DevCon 2019",
    themeColor: "#F54923",
    msTileColor: "#F54923"
  }
};
