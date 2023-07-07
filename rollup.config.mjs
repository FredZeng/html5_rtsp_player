import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import path from 'path';

const __dirname = path.resolve();

export default {
    input: path.join(__dirname, 'player.js'),
    output: {
        format: 'iife',
        file: path.join(__dirname, 'example/streamedian.min.js'),
        sourcemap: true,
    },
    plugins: [
        resolve({
            extensions: ['.js', '.ts'],
            browser: true,
            mainFields: ['browser', 'main', 'module'],
        }),
        commonjs(),
        nodePolyfills(),
        json(),
        babel({
            extensions: ['.js', '.ts'],
        }),
        terser({ safari10: true }),
        alias({
            entries: {
                bp_logger: path.join(__dirname, 'node_modules/bp_logger/logger.js'),
                bp_event: path.join(__dirname, 'node_modules/bp_event/event.js'),
                bp_statemachine: path.join(__dirname, 'node_modules/bp_statemachine/statemachine.js'),
                jsencrypt: path.join(__dirname, 'node_modules/jsencrypt/src/jsencrypt.js'),
                rtsp: path.join(__dirname, 'node_modules/html5_rtsp_player/src'),
                streamedian: path.join(__dirname, 'src'),
            },
        }),
    ],
};
