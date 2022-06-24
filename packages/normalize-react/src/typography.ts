import { GlobalProps } from '@emotion/react'

export const typography: GlobalProps['styles'] = () => ({
    h1: { fontSize: 48, lineHeight: '72px', marginBlockStart: '18px', marginBlockEnd: '18px' },
    h2: { fontSize: 40, lineHeight: '60px', marginBlockStart: '15px', marginBlockEnd: '15px' },
    h3: { fontSize: 36, lineHeight: '54px', marginBlockStart: '14px', marginBlockEnd: '14px' },
    h4: { fontSize: 32, lineHeight: '48px', marginBlockStart: '12px', marginBlockEnd: '12px' },
    h5: { fontSize: 28, lineHeight: '42px', marginBlockStart: '10px', marginBlockEnd: '10px' },
    h6: { fontSize: 24, lineHeight: '36px', marginBlockStart: '9px', marginBlockEnd: '9px' },
    'h1,h2,h3,h4,h5,h6': {
        fontWeight: 700,
    },
})
