import { createVuePlugin } from 'vite-plugin-vue2'

const config = {
  plugins: [createVuePlugin()],
  optimizeDeps:{
    include: ['koa', 'koa-router', 'await-to-js'],
    auto: true
  },

  server: {
    port: 9876,
    proxy: {
      // string shorthand
      '/foo': `http://127.0.0.1:13213`,
      // with options
      '/api': {
        target: `http://127.0.0.1:13213`,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
  },
}

export default config
