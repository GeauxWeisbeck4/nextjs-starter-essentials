module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@next/next/recommended",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
