const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    publicPath: `/app`,
    // eslint-disable-next-line no-undef
    path: path.join(__dirname, `public/app`),
  },
  devtool: `source-map`,
  devServer: {
    // eslint-disable-next-line no-undef
    contentBase: path.join(__dirname, `public/app`),
    host: `localhost`,
    port: `8070`,
    compress: true,
    watchContentBase: true,
  },
//   plugins: [
//     new MomentLocalesPlugin({
//       localesToKeep: [`es-us`],
//     })
//   ]
};
