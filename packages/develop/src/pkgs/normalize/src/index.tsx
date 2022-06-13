import { Global } from '@emotion/react'
import { ripple as rp } from '../../utils/ripple'
import { base } from './base'
import { extend as ex } from './extend'
import { typography as ty } from './typography'

interface Props {
    extend?: boolean
    ripple?: boolean
    typography?: boolean
}
export default function ({ ripple = true, extend = true, typography = true }: Props) {
    return (
        <>
            <Global styles={base} />
            {typography && <Global styles={ty} />}
            {ripple && <Global styles={rp} />}
            {extend && <Global styles={ex} />}
        </>
    )
}
