import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // root: 'src/packages/mono2/',

  plugins: [vue()],
  // 开发服务器配置
  server: {
    port: 11000,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/packages/mono1/index.html'),
        mono2: path.resolve(__dirname, 'src/packages/mono2/index.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        // \n 处理文件中多个引入报换行错误的问题
        additionalData: "@import './src/styles/color.sass'\n",
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
