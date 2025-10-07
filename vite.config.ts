import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import analyzer from 'rollup-plugin-analyzer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Add bundle analyzer in development
    ...(process.env.ANALYZE ? [analyzer({
      summaryOnly: true,
      limit: 20
    })] : [])
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'src': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@reduxjs/toolkit',
      'react-redux',
      'axios',
      'lodash',
      'moment'
    ],
    exclude: ['@fortawesome/fontawesome-free']
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    // Increase chunk size warning limit to 600kb
    chunkSizeWarningLimit: 600,
    // Target modern browsers for better optimization
    target: 'es2020',
    rollupOptions: {
      output: {
        // More aggressive chunk splitting
        manualChunks: (id) => {
          // Split XLSX separately - it's the largest dependency (836KB)
          if (id.includes('node_modules/xlsx')) {
            return 'xlsx';
          }

          // Chart.js - second largest (331KB)
          if (id.includes('node_modules/chart')) {
            return 'chartjs';
          }

          // Core React libraries
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react';
          }
          if (id.includes('node_modules/react-router')) {
            return 'react-router';
          }

          // Redux and state management
          if (id.includes('node_modules/@reduxjs/toolkit') || id.includes('node_modules/react-redux')) {
            return 'redux';
          }

          // Form libraries - split these as they're large
          if (id.includes('node_modules/yup')) {
            return 'yup';
          }
          if (id.includes('node_modules/@hookform')) {
            return 'hookform';
          }

          // Date libraries - moment is large
          if (id.includes('node_modules/moment')) {
            return 'moment';
          }
          if (id.includes('node_modules/react-datepicker')) {
            return 'datepicker';
          }

          // Bootstrap and jQuery - keep separate as they're legacy
          if (id.includes('node_modules/bootstrap')) {
            return 'bootstrap';
          }
          if (id.includes('node_modules/jquery')) {
            return 'jquery';
          }

          // Utility libraries
          if (id.includes('node_modules/lodash')) {
            return 'lodash';
          }
          if (id.includes('node_modules/axios')) {
            return 'axios';
          }

          // Other vendor libraries
          if (id.includes('node_modules/')) {
            return 'vendor';
          }

          // Application code splitting by functional domains
          if (id.includes('src/modules/auth') || id.includes('src/modules/tenant') || id.includes('src/modules/user')) {
            return 'core-modules';
          }
          if (id.includes('src/modules/securityGuard') || id.includes('src/modules/guardShift') ||
            id.includes('src/modules/incident') || id.includes('src/modules/patrol')) {
            return 'security-modules';
          }
          if (id.includes('src/modules/clientAccount') || id.includes('src/modules/businessInfo') ||
            id.includes('src/modules/billing') || id.includes('src/modules/service')) {
            return 'business-modules';
          }
          if (id.includes('src/modules/inventory') || id.includes('src/modules/station') ||
            id.includes('src/modules/shift') || id.includes('src/modules/patrolLog')) {
            return 'operations-modules';
          }
          if (id.includes('src/modules/notification') || id.includes('src/modules/memos') ||
            id.includes('src/modules/task') || id.includes('src/modules/request')) {
            return 'communication-modules';
          }
          if (id.includes('src/modules/tutorial') || id.includes('src/modules/certification') ||
            id.includes('src/modules/videoTutorial')) {
            return 'training-modules';
          }
          if (id.includes('src/modules/')) {
            return 'other-modules';
          }

          // View components
          if (id.includes('src/view/') && id.includes('/list/')) {
            return 'list-views';
          }
          if (id.includes('src/view/') && id.includes('/form/')) {
            return 'form-views';
          }
          if (id.includes('src/view/') && id.includes('/importer/')) {
            return 'importer-views';
          }
          if (id.includes('src/view/')) {
            return 'views';
          }

          // I18n and shared utilities
          if (id.includes('src/i18n/')) {
            return 'i18n';
          }
          if (id.includes('src/modules/shared/')) {
            return 'shared-utils';
          }
        },
        // Generate consistent chunk names
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()?.replace(/\.[^/.]+$/, "") || 'unknown'
            : 'unknown';
          return `assets/${facadeModuleId}-[hash].js`;
        },
      },
    },
    // Enable minification with default minifier (esbuild)
    minify: true,
  },
  define: {
    // For compatibility with some libraries that expect global
    global: 'globalThis',
  },
  envPrefix: 'VITE_',
  css: {
    postcss: './postcss.config.js',
  },
  // Enable tree shaking for CSS
  esbuild: {
    treeShaking: true,
  },
});