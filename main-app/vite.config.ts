import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main-app",
      remotes: {
        "header-app": "http://100.113.165.20:5001/assets/remoteEntry.js",
        "footer-app": "http://100.113.165.20:5002/assets/remoteEntry.js",
        "menu-app": "http://100.113.165.20:5003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5000,
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
    port: 5000,
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
