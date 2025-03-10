import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, './dist'),
    chunkSizeWarningLimit: 700,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        const parts = id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/");
                        // Handle scoped packages
                        return parts[0].startsWith("@")
                            ? `${parts[0]}/${parts[1]}`
                            : parts[0];
                    }
                },
            },
        }, // // Change this to the desired output directory
  },
})