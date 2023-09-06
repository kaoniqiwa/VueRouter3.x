const path = require("path");
const typescript = require("@rollup/plugin-typescript");

module.exports = {
  input: "./src/entries/esm.ts",
  output: {
    file: path.resolve("dist/rollup/vue-router.js"),
    name: "VueRouter",
    format: "umd",
    env: "development",
  },
  plugins: [
    typescript({
      /**对于 typescript项目,rollup配置和webpack配置无法兼容，所以新建配置 */
      tsconfig: path.resolve(process.cwd(), "tsconfig.rollup.json"),
    }),
  ],
};
