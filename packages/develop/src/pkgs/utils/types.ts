export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
}

export type IColor = 'primary' | 'success' | 'warn' | 'error' | string

export type IFace = 'filled' | 'outlined' | 'link'
