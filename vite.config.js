import { resolve } from 'path';

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                metiers: resolve(__dirname, 'metiers/index.html')
            }
        }
    }
}