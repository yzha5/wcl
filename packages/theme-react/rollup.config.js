import { rollupConfig } from '../../rollup.config'
import pkg from './package.json'

export default rollupConfig({
    outputFile: pkg.main,
})