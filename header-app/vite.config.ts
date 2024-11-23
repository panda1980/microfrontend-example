import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "header-app",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/Header.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5001,
    host: true, // Add this line
    cors: {
      origin: "*",
      methods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  preview: {
    port: 5001,
    host: true, // Add this line
    cors: {
      origin: "*",
      methods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
  },
});
