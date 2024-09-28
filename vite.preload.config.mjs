import { fileURLToPath, URL } from 'node:url';

import { defineConfig, mergeConfig } from 'vite';
import {
  getBuildConfig,
  external,
  pluginHotRestart,
} from './vite.base.config.mjs';

// https://vitejs.dev/config
export default defineConfig((env) => {
  /** @type {import('vite').ConfigEnv<'build'>} */
  const forgeEnv = env;
  const { forgeConfigSelf } = forgeEnv;
  /** @type {import('vite').UserConfig} */
  const config = {
    publicDir: './resources',
    envPrefix: ['VITE_', 'PRELOAD_'],
    build: {
      rollupOptions: {
        external,
        // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
        input: forgeConfigSelf.entry,
        output: {
          format: 'cjs',
          // It should not be split chunks.
          inlineDynamicImports: true,
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
      },
    },
    plugins: [pluginHotRestart('reload')],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  };

  return mergeConfig(getBuildConfig(forgeEnv), config);
});
