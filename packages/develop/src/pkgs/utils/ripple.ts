import { MouseEvent } from 'react'
import { GlobalProps, keyframes } from '@emotion/react'

export function createRipple(event: MouseEvent<HTMLElement>): HTMLSpanElement {
    const ripple = document.createElement('span')
    const size = event.currentTarget.offsetWidth
    const pos = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - pos.left - size / 2
    const y = event.clientY - pos.top - size / 2
    const style = 'top:' + y + 'px; left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;'
    ripple.setAttribute('style', style)
    return ripple
}

export function createRippleContainer(parent: EventTarget & HTMLElement): Element {
    if (parent.lastElementChild?.classList.contains('ripple--container')) {
        return parent.lastElementChild
    } else {
        const container = document.createElement('div')
        container.classList.add('ripple--container')
        parent.appendChild(container)
        return container
    }
}

export function ShowRipple(e: MouseEvent<HTMLElement>) {
    //获取实例
    const self = e.currentTarget

    //创建一个 波纹容器
    const rippleContainer = createRippleContainer(self)

    //给 波纹容器 创建一个 波纹
    const ripple = createRipple(e)
    rippleContainer.appendChild(ripple)

    //1秒后移除 波纹/容器
    setTimeout(() => {
        // 移除波纹
        rippleContainer.removeChild(ripple)

        // 移除容器
        if (!rippleContainer.hasChildNodes()) {
            self.removeChild(rippleContainer)
        }
    }, 1000)
}

// styles

const rippleKeyframes = keyframes({
    to: {
        opacity: 0,
        transform: 'scale(2)',
    },
})
export const ripple: GlobalProps['styles'] = () => ({
    '.ripple': {
        position: 'relative',
        overflow: 'hidden',
        '& &--container': {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            '& span': {
                position: 'absolute',
                transform: 'scale(0)',
                borderRadius: '100%',
                opacity: 0.3,
                // backgroundColor: 'white',
                animation: `${rippleKeyframes} 1s`,
            },
        },
    },
})
