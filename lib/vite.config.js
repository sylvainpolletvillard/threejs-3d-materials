import { resolve } from 'path'
import { defineConfig } from 'vite'

/* TOFIX: textures are inlined on lib mode, see https://github.com/vitejs/vite/issues/4454 */

export default defineConfig({
    publicDir: 'assets',
    build: {
        lib: {
          entry: resolve(__dirname, './index.ts'),
          name: '3DMaterials',
          fileName: '3d-materials',
          formats: ["es"],
          emitAssetsWithModule: true // if https://github.com/vitejs/vite/pull/9734 gets merged someday
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['three'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    three: 'THREE'
                }
            }
        }

    }
})