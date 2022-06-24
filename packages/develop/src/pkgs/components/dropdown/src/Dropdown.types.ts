import { HTMLAttributes } from 'react'
import { IListItemProps } from '../../../component.types'
import { IColor } from '../../../utils'

export interface DropdownStyleProps {
    size?: number
    radius?: number
    color?: IColor
    disabled?: boolean
    inlineLabel?: boolean
}
export interface DropdownProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'>,
        DropdownStyleProps {
    items: IListItemProps[]
    label?: string

    //选择一项时的事件
    onSelect?: (item: any, key: string | number, event) => void
}
