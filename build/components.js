const pkg = require("../package.json");
const path = require("path");
const fs = require("fs-extra");
const rollup = require("rollup");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const { babel } = require("@rollup/plugin-babel");
const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const typescript = require("@rollup/plugin-typescript");
const css = require("rollup-plugin-css-only");

const build = async (name) => {
  const inputOptions = {
    input: path.resolve(__dirname, `../src/${name}`),
    plugins: [
      nodeResolve({
        extensions: [".ts", ".tsx"],
      }),
      postcss({
        modules: true,
        // extract: true, // 抽取 css 文件
        inject: true, // head 标签 注入 css
        extensions: [".scss"],
        plugins: [
          autoprefixer(),
          cssnano({
            preset: "default",
          }),
        ],
      }),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        include: "src/**",
        babelHelpers: "bundled",
      }),
      typescript(),
    ],
    external: Object.keys(pkg.dependencies).filter((name) => name !== "lodash"),
  };
  const bundle = await rollup.rollup(inputOptions);
  const outOptions = [
    {
      format: "esm",
      exports: "auto",
      dir: path.resolve(__dirname, `../es/${name}`),
    },
    {
      format: "cjs",
      exports: "auto",
      dir: path.resolve(__dirname, `../lib/${name}`),
    },
  ];
  for (const option of outOptions) {
    await bundle.write(option);
  }
};

/**
 * 构建组件包
 */
const runBuild = async () => {
  const srcDirNames = await fs
    .readdirSync(path.resolve(__dirname, "../src"))
    .filter((name) => name !== "index.ts");

  for (const name of srcDirNames) await build(name);
};

module.exports = runBuild;
