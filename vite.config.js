import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Add this line - it enables listening on all local IPs
    port: 5173, // Optional - specify port explicitly
  },
});
