import { Global } from '@emotion/react'
import { ripple as rp } from '../../utils/ripple'
import { extend as ex } from './extend'

export default function ({ ripple = true, extend = true }: { extend?: boolean; ripple?: boolean }) {
    return (
        <>
            {ripple && <Global styles={rp} />}
            {extend && <Global styles={ex} />}
        </>
    )
}
