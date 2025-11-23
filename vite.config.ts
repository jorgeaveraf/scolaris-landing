import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Fuerza a usar una sola instancia de React/DOM aun si alguna
    // dependencia trae su propia copia (evita invalid hook call).
    dedupe: ['react', 'react-dom'],
  },
})
