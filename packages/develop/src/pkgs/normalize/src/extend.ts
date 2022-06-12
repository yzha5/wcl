import { GlobalProps } from '@emotion/react'

export const extend: GlobalProps['styles'] = () => ({
    '*,*::before,*::after': {
        boxSizing: 'border-box',
        transition: '0.2s',
    },
})
