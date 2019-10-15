const path = require("path");

const base = require("../../webpack.config.js");

module.exports = {
  ...base,
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
};
