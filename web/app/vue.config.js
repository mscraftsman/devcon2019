const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_normalize.scss";
          @import "@/scss/_setup.scss";
          @import "@/scss/_typography.scss";
          @import "@/scss/_generic.scss";
          @import "@/scss/_animations.scss";
        `,
      },
    },
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
          removeAttributeQuotes: false,
        },
      }),
    ],
    devServer: {
      disableHostCheck: true,
    },
  },
  pwa: {
    name: "DevCon 2019",
    themeColor: "#F54923",
    msTileColor: "#F54923",
  },
};
