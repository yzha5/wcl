import peerDepsExternal from 'rollup-plugin-peer-deps-external' //不编译peer里面的包
import resolve from '@rollup/plugin-node-resolve' //直接使用模块名称导入模块
import typescript from 'rollup-plugin-typescript2' //ts支持
import json from 'rollup-plugin-json' //从.json中获取数据

export function rollupConfig({ input = 'src/index.ts', outputFile }) {
    return {
        input: input,
        output: {
            file: outputFile,
            format: 'esm',
            sourcemap: true,
        },

        plugins: [
            json(),
            peerDepsExternal(),
            // terser(), //对模块代码进行压缩
            resolve(), //直接使用模块名称导入模块
            // commonjs(), //加载CommonJS模块
            typescript({
                useTsconfigDeclarationDir: true,
            }),
        ],
    }
}