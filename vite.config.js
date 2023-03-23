import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const root=resolve(__dirname, 'src')
const outDir=resolve(__dirname,'dist')
// https://vitejs.dev/config/
export default defineConfig({
  root,
  base: '/dynamisk_cv_hemsida/',
  plugins: [react()],
  build:{
    outDir,
    emptyOutDir: true,
    rollupOptions:{
      input:{
        main: resolve(root, 'index.html'),
        reactpart: resolve(root, 'ReactPart.html'),
        about: resolve(root, 'HTML', 'About.html'),
        contact: resolve(root, 'HTML', 'Contact.html'),
        cv: resolve(root, 'HTML', 'Cv.html'),
        cvjson: resolve(root, 'javascript', 'cvlist.json'),
        cvjs: resolve(root, 'javascript', 'cv.js'),
        easteregg: resolve(root, 'javascript', 'EasterEgg.js')
      }
    }
  }
})
