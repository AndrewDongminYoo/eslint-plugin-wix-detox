"use strict";

module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:eslint-plugin/recommended"],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
  },
  env: {
    node: true,
  },
  rules: {
    "no-extraneous-require": "off",
    "no-extraneous-import": "off",
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
};
