/*
 * 判断是否为对象
 */
function isObj(s: any): boolean {
    return s && typeof s === 'object' && !Array.isArray(s)
}

/*
 * 深度合并对象
 */
export function DeepMerge<T, S>(target: T, source: S) {
    let output: T = Object.assign({}, target)
    if (isObj(source)) {
        Object.keys(source).forEach((key) => {
            if (isObj(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] })
                } else {
                    output[key] = DeepMerge(target[key], source[key])
                }
            } else if (source[key] !== undefined) {
                Object.assign(output, { [key]: source[key] })
            }
        })
    }
    return output
}
