import { createVuePlugin } from 'vite-plugin-vue2'

const config = {
  plugins: [createVuePlugin()],
  optimizeDeps:{
    include: ['vuex-router-sync', 'deepmerge', 'xlsx'],
    link: [],
    allowNodeBuiltins: ["request", "mime", "koa", "koa-bodyparser", "koa-helmet", "koa-mount", "koa-router", "koa-static", "co-request", "qs", "long", "memory-fs",  "signale", "statuses", "tmp", "uuid", "vite",'destroy', 'isstream', 'content-disposition'],
    auto: true
  },
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

  port: 9876,
}

export default config
