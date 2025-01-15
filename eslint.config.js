import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'src/public',
      'dist',
      'node_modules',
      'coverage',
      'src/**/*.html',
      '.prettierrc.js',
      'easdasdasdslint.config.js',
      'env.d.ts',
      'commitlint.config.js'
    ]
  },
];
