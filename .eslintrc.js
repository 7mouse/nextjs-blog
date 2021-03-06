module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",

    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",

    // React 17 is not necessarily use import react

    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "react/react-in-jsx-scope": "off",
    "react/state-in-constructor": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],

    // code styles
    quotes: [1, "double"],
    camelcase: 2,
    "comma-dangle": [2, "only-multiline"],
    "comma-spacing": [2, { before: false, after: true }],
    "comma-style": [2, "last"],
    "accessor-pairs": 2
  },
  overrides: [
    {
      files: ["**/*.tsx", "**/*ts"],
      rules: {
        "react/prop-types": "off"
      }
    }
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
