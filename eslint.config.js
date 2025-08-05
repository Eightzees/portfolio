import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react-hooks/rules-of-hooks": error,
      "react-hooks/exhaustive-deps": warn,
      // "import/order": [
      //   "error",
      //   {
      //     groups: [
      //       "builtin",
      //       "external",
      //       "parent",
      //       "sibling",
      //       "index",
      //       "object",
      //       "type",
      //     ],
      //     pathGroups: [
      //       {
      //         pattern: "{react,react-dom/**,react-router-dom}",
      //         group: "builtin",
      //         position: "before",
      //       },
      //       {
      //         pattern: "@src/**",
      //         group: "parent",
      //         position: "before",
      //       },
      //     ],
      //     pathGroupsExcludedImportTypes: ["builtin"],
      //     alphabetize: {
      //       order: "asc",
      //     },
      //     "newlines-between": "always",
      //   },
      // ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
    },
  }
);
