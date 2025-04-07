import { globalIgnores } from "eslint/config";
// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  globalIgnores(["node_modules", "build", "cypress.config.js", "cypress"])
);
