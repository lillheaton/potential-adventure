const prettierConfig = require("./prettier.config");
const path = require("path");

module.exports = {
  root: true,

  parser: "babel-eslint",

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },

  env: {
    browser: true,
    es6: true,
    node: false
  },

  extends: ["standard", "prettier", "plugin:import/errors"],

  plugins: ["prettier", "import"],

  rules: {
    "no-console": "error",
    "prettier/prettier": ["error", prettierConfig]
  },

  globals: {
    process: true
  },

  overrides: [
    {
      plugins: ["import", "prettier"],

      rules: {
        "no-console": "error",
        "no-empty-pattern": "off",
        "no-unused-vars": "off",
        "import/no-unresolved": "off",

        "prettier/prettier": ["error", prettierConfig]
      }
    }
  ]
};
