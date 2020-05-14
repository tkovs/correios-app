// module.exports = {
//   parser: "babel-eslint",
//   env: {
//     es6: true,
//     jest: true
//   },
//   extends: [
//     "airbnb",
//     "plugin:react-native/all",
//     "prettier",
//     "prettier/react"
//   ],
//   globals: {
//     "Atomics": "readonly",
//     "SharedArrayBuffer": "readonly",
//     "__DEV__": true
//   },
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true
//     },
//     ecmaVersion: 2018,
//     sourceType: "module"
//   },
//   plugins: ["react", "react-native", "jsx-a11y", "import", "prettier"],
//   rules: {
//     "prettier/prettier": "error",
//     "react/jsx-filename-extension": [
//       "error",
//       { "extensions": [".js", ".jsx"] }
//     ],
//     "import/prefer-default-export": "off",
//     "react/jsx-props-no-spreading": "off",
//     "no-use-before-define": "off",
//     "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
//     "react/jsx-one-expression-per-line": "off",
//     "react-native/no-color-literals": "off",
//     "react-native/sort-styles": "off",
//     "global-require": "off",
//     "react-native/no-raw-text": "off",
//     "semi": [2, "never"],
//   }
// };
module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "useJSXTextNode": true,
    "project": "./tsconfig.json",
    "tsconfigRootDir": "."
  },
  "plugins": [
    "@typescript-eslint",
  ],
  "rules": {
    "react/jsx-uses-vars": 1,
    "react/react-in-jsx-scope": 1,
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error", { "variables": false }],
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    '@react-native-community', 'airbnb-typescript', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'
  ],
}