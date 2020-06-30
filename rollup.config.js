import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import css from 'rollup-plugin-css-only'
import del from 'rollup-plugin-delete'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import generatePackageJson from 'rollup-plugin-generate-package-json'

import pkg from './package.json'

const globals = { 'styled-components': 'styled' }

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      globals,
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      globals,
    },
  ],
  external: ['react', 'react-dom', 'styled-components'],
  plugins: [
    del({ targets: 'dist/*' }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: '**/__tests__/**',
      clean: true,
    }),
    css({ output: 'dist/ionic-react-my-ui-components.css' }),
    generatePackageJson({
      baseContents: (pkg) => ({
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
        author: pkg.author,
        license: pkg.license,
        main: pkg.main,
        module: pkg.module,
        private: false,
        devDependencies: pkg.devDependencies,
        peerDependencies: pkg.peerDependencies,
      }),
    }),
  ],
}
