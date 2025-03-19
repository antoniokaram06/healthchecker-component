import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true, exclude: ["**/*.stories.ts", "**/*.test.tsx"]}),
  ],
  build: { 
    lib: { 
      entry: {
        component: './src/index.ts'
      },
      name: 'healthchecker', 
      fileName: (format) => `healthchecker.${format}.js`,
      formats: ['es', 'cjs', 'umd' ],
    }, 
    rollupOptions: { 
      external: Object.keys(peerDependencies), 
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } } 
    }
  },
})
