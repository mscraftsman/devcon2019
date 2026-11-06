module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      css: {
        url: {
          filter: (url) => !url.startsWith("/"),
        },
      },
      scss: {
        sassOptions: {
          silenceDeprecations: [
            "import",
            "global-builtin",
            "color-functions",
            "slash-div",
            "legacy-js-api",
          ],
        },
        additionalData: `
          @import "@/scss/_normalize.scss";
          @import "@/scss/_setup.scss";
          @import "@/scss/_typography.scss";
          @import "@/scss/_generic.scss";
          @import "@/scss/_animations.scss";
        `,
      },
    },
  },
  devServer: {
    allowedHosts: "all",
  },
  configureWebpack: {
    mode: "production",
    ignoreWarnings: [/export 'default' \(imported as 'style\d+'\)/],
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].template = "public/index.html";
      args[0].minify = {
        collapseWhitespace: false,
        removeComments: true,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: false,
        useShortDoctype: false,
        removeStyleLinkTypeAttributes: false,
        removeAttributeQuotes: false,
      };
      return args;
    });
  },
  pwa: {
    name: "DevCon 2019",
    themeColor: "#F54923",
    msTileColor: "#F54923",
  },
};
