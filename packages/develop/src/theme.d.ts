import '@emotion/react'
import { Theme as T } from './pkgs/utils'

declare module '@emotion/react' {
    export interface Theme extends T {}
}
