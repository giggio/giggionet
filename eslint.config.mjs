import pluginJs from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["node_modules/", "public/", "resources/", "outputs/"],
  },
  {
    files: ["assets/**/*.mjs"],
    languageOptions: {
      sourceType: "module",
      globals: { ...globals.browser },
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: { ...globals.browser, ...globals.jquery },
    },
  },
  {
    files: ["postcss.config.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
  },
  {
    files: ["**/*.mjs"],
    ignores: ["assets/"],
    languageOptions: {
      sourceType: "module",
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
];
