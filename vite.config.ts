import { defineConfig, loadEnv, BuildOptions } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  //加载环境变量，打包路由路径
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [vue()],
    base: env.VITE_BASEURL,
    //添加快捷路径
    resolve: {
      alias: {
        '@': join(__dirname, "src"),
      }
    },
    //代理
    server: {
      host: '0.0.0.0',
      https: false,
      // https://github.com/http-party/node-http-proxy#options
      proxy: {
        '/api': {
          target: `https://localhost:${env.VITE_PORT}/api/`,
          changeOrigin: true,
          secure: false,//验证 SSL 证书
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    // https://vitejs.dev/config/build-options.html#build-minify
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: command == 'build',
          drop_debugger: command == 'build'
        }
      }
    } as BuildOptions,
  }
})
