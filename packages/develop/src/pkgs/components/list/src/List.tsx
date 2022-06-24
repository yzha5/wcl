import { IconSelect, iconSelect } from '../../../icon/src'
import { ShowRipple } from '../../../utils'
import { StyledListItem, StyledListRoot } from './List.style'
import { ListProps } from './List.types'
import { defaultSize } from './List.variable'

export default function List({ items, size = defaultSize, onItemClick, ...rest }: ListProps) {
    return (
        <StyledListRoot size={size} {...rest}>
            {items.map((item) => (
                <StyledListItem
                    key={item.key}
                    className={['ripple', item.className].join('')}
                    size={size}
                    hasSecondary={item.secondaryText != undefined}
                    color={item.color}
                    disabled={item.disabled}
                    selected={item.selected}
                    onMouseDown={(e) => {
                        !item.disabled && ShowRipple(e)
                    }}
                    onClick={(e) => onItemClick && onItemClick(e, item)}
                >
                    <div className='list-item-content'>
                        {item.frontIcon && (
                            <div className='list-item-icon'>
                                <IconSelect name={item.frontIcon} />
                            </div>
                        )}
                        <div>
                            <div>{item.label}</div>
                            {item.secondaryText && (
                                <div className='list-item-second'>{item.secondaryText}</div>
                            )}
                        </div>
                    </div>
                    {item.endIcon && (
                        <div className='list-item-icon'>
                            <IconSelect name={item.endIcon} />
                        </div>
                    )}
                </StyledListItem>
            ))}
        </StyledListRoot>
    )
}
