import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react()],
    test: {
      // 👋 add the line below to add jsdom to vite
      environment: "jsdom",
      // hey! 👋 over here
      globals: true,
      setupFiles: "./tests/setup.js", // assuming the test folder is in the root of our project
    },
  };
});
