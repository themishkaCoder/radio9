import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
    },
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: `@import "./src/assets/scss/global.scss";`
        }
      }
    },
    plugins: [vue(),

    VitePWA({
      registerType: 'autoUpdate', devOptions: {
        enabled: true
      }
    })
    ]
  }
})
