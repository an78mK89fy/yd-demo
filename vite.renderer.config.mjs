import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import { pluginExposeRenderer } from './vite.base.config.mjs';

import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config
export default defineConfig((env) => {
  /** @type {import('vite').ConfigEnv<'renderer'>} */
  const forgeEnv = env;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? '';

  const config = {
    envPrefix: ['VITE_', 'RENDERER_'],
    root,
    mode,
    base: './',
    build: {
      outDir: `.vite/renderer/${name}`,
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue', 'vue-router', 'pinia'] // 可以配置自动import的包
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      pluginExposeRenderer(name),
      vue()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      preserveSymlinks: true,
    },
    clearScreen: false,
  };

  /** @type {import('vite').UserConfig} */
  return config
});
