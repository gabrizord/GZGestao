import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/main/resources/static/protected/js/index.js', // Caminho para o arquivo de entrada
    output: {
        file: 'target/classes/static/protected/js/bundle.js', // Bundle final gerado na mesma pasta
        format: 'esm', // ES Module format
        sourcemap: true
    },
    plugins: [
        resolve(),
        commonjs()
    ]
};
