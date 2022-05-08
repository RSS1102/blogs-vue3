import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //  vite2打包出现警告，"@charset" must be the first, https://www.zhihu.com/question/498190531/answer/2219095376
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            }
          }
        }
      ],
    },
  },
  //代理
  server: {
    proxy: {
      // '/api': 'http://localhost:3003'
      '/api': {
        target: 'http://localhost:3003/api/',
        // target: 'http://101.34.251.59:3003/api/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  }

})


