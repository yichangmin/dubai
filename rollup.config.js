import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const extensions = ["js", "jsx", "ts", "tsx", "mjs"];
const config = [
  {
    input: "./src/index.ts",
    output: [
      {
        file: `./dist/index.cjs.js`,
        format: "cjs",
      },
      {
        file: "./dist/index.ems.js",
        format: "es",
      },
    ],
    plugins: [
      commonjs(),
      nodeResolve({ extensions }),
      peerDepsExternal(),
      babel({ babelHelpers: "bundled" }),
      typescript({
        useTsconfigDeclarationDir: false,
      }),
    ],
  },
];
export default config;
