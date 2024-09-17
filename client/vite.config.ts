// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// //import path from 'path';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [{ find : "@", replacement : path.resolve("client", "src")}]
//   }
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Alias '@' to the 'src' directory
    },
  },
});

