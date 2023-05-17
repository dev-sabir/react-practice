import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { defaultMaxListeners } from "events";

export default defineConfig({
  plugins: [react()],
  root: "src",
});
