// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
  configureWebpack: {
    devtool: process.env.NODE_ENV === "production" ? false : "source-map",
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/hello-world/'
  : '/'
};
