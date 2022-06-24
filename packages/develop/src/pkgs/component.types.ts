import { IconName } from './icon/src'
import { IColor } from './utils'

export interface IListItemProps {
    key: string | number

    //列表项数据
    data: any

    // 列表项label
    label: string

    // 列表项第二行文本
    secondaryText?: string

    //列表项背景色
    color?: IColor

    // 前面的图标名
    frontIcon?: IconName

    // 后面的图标名
    endIcon?: IconName

    // 选中
    selected?: boolean

    // 禁用
    disabled?: boolean

    className?: string
}
