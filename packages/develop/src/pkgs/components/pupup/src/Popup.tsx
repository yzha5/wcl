import { createRef, ReactNode, RefObject, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { StyledPopupContainer, StyledPopupRoot } from './Popup.style'
import { PopupProps } from './Popup.types'

const body = document.getElementsByTagName('body')[0]
body.getBoundingClientRect()
export default function Popup({
    control,
    isOpen,
    onOutClick,
    styles,
    layoutClassName,
    children,
}: PopupProps) {
    const [ctlRect, setCtlRect] = useState<DOMRect>()
    const [docW, setDocW] = useState(0)
    const [docH, setDocH] = useState(0)

    let rootRef = createRef<HTMLDivElement>()
    let layoutRef = createRef<HTMLDivElement>()

    const docWH = function () {
        setDocW(document.documentElement.clientWidth)
        setDocH(document.documentElement.clientHeight)
    }

    const setCR = (el: Element) => {
        setCtlRect(el.getBoundingClientRect())
    }

    useEffect(
        function () {
            const controlEl = rootRef.current.firstElementChild
            if (isOpen) {
                docWH()
                setCR(controlEl)
                window.addEventListener('scroll', () => setCR(controlEl))
                window.addEventListener('resize', docWH)
            } else {
                return function () {
                    window.removeEventListener('scroll', () => setCR(controlEl))
                    window.removeEventListener('resize', docWH)
                }
            }
        },
        [isOpen]
    )
    useEffect(function () {
        if (layoutRef.current && isOpen) {
            const el = layoutRef.current
            const lr = el.getBoundingClientRect()
            const top = (): number => {
                if (lr.height >= docH) {
                    return 0
                } else {
                    if (lr.height <= docH - ctlRect.bottom) {
                        return ctlRect.bottom
                    } else {
                        if (lr.height <= ctlRect.top) {
                            return ctlRect.top - lr.height
                        } else {
                            return docH - lr.height
                        }
                    }
                }
            }
            const left = (): number => {
                if (lr.width >= docW) {
                    return 0
                } else {
                    if (lr.width <= docW - ctlRect.left) {
                        return ctlRect.left
                    } else {
                        if (lr.width <= ctlRect.right) {
                            return ctlRect.right - lr.width
                        } else {
                            return docW - lr.width
                        }
                    }
                }
            }
            el.setAttribute('style', `top:${top()}px;left:${left()}px`)
        }
    })

    const popupDom = (ref: RefObject<HTMLDivElement>, mw: number, c: ReactNode) => {
        return (
            <StyledPopupContainer
                style={styles?.container}
                layoutMinWidth={mw}
                onClick={() => onOutClick()}
            >
                <div
                    className={['popup-layout', layoutClassName].join('')}
                    ref={ref}
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    {c}
                </div>
            </StyledPopupContainer>
        )
    }
    return (
        <StyledPopupRoot ref={rootRef} style={styles?.root}>
            {control}
            {isOpen &&
                ctlRect != undefined &&
                ReactDOM.createPortal(popupDom(layoutRef, ctlRect.width, children), body)}
        </StyledPopupRoot>
    )
}
