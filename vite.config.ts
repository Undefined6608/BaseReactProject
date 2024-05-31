import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import dotenv from "dotenv";

// https://vitejs.dev/config/

dotenv.config({path: `.env.${process.env.NODE_ENV || "development"}`});
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		port: parseInt(process.env.VITE_PORT || "3000", 10),
		proxy: {
			[process.env.VITE_BASE_URL]: {
				target: process.env.VITE_API_PATH,
				changeOrigin: true,
			},
		},
	},
	build: {
		outDir: process.env.VITE_OUTPUT_DIR || "dist",
	},
	css: {
		preprocessorOptions: {
			scss: {},
		},
	},
});
