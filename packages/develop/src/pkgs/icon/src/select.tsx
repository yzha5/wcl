import App from './app'
import { IconName } from './name.types'
import { IconFunc, IconProps } from './types'

type NameMap = {
    [x in IconName]: IconFunc
}

const nameMap: NameMap = {
    App,
}

export function iconSelect(name: IconName): IconFunc {
    return nameMap[name]
}
