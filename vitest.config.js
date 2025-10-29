import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vitest Configuration
// This file tells Vitest how to run our tests
export default defineConfig({
  plugins: [react()],
  test: {
    // Use happy-dom to simulate a browser environment in Node.js
    // This allows us to test components that use DOM APIs
    environment: 'happy-dom',
    
    // Setup file runs before all tests
    // We use it to import testing utilities globally
    setupFiles: ['./src/test/setup.js'],
    
    // Show test coverage when running tests
    // Coverage shows which parts of your code are tested
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '*.config.js',
        'src/main.jsx',
      ],
    },
    
    // Global test configuration
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});


