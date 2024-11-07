// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        open: true,   // Esto abre el navegador automáticamente al iniciar el servidor de desarrollo
        port: 3000,   // Cambia el puerto si lo necesitas
    },
});