import { HTMLAttributes, LiHTMLAttributes, MouseEvent } from 'react'
import { IListItemProps } from '../../../component.types'
import { IColor } from '../../../utils'

export interface ListStyleProps {
    size?: number
    color?: IColor
    mulitple?: boolean
}

export interface ListProps
    extends Omit<HTMLAttributes<HTMLUListElement>, 'color'>,
        ListStyleProps {
    items: IListItemProps[]
    onItemClick?: (e: MouseEvent<HTMLLIElement>, item: IListItemProps) => void
}
