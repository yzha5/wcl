import { Down } from '../../../icon/src'
import { StyledDropdownContainer, StyledDropdownRoot } from './Dropdown.style'
import { DropdownProps } from './Dropdown.types'

export default function Dropdown({
    label,
    size = 36,
    color,
    radius,
    inlineLabel,
}: DropdownProps) {
    return (
        <StyledDropdownRoot size={size} inlineLabel={inlineLabel} hasLabel={label != undefined}>
            {label && <div className='dropdown-label'>{label}</div>}
            <StyledDropdownContainer size={size} color={color} radius={radius}>
                <div>content</div>
                <div className='dropdown-icon'>{<Down />}</div>
            </StyledDropdownContainer>
        </StyledDropdownRoot>
    )
}
