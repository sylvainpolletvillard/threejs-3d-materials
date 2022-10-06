import { resolve } from 'path'

export default {
  base: "/threejs-3d-materials/",
  resolve:{
    alias:{
      'threejs-3d-materials' : resolve(__dirname, '../lib/dist/3d-materials.js')
    },
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  }
}