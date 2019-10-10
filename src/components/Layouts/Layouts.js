import styled from 'styled-components'

import { colors } from 'utils'

export const Margin = styled.div`
    ${({ top }) => top && `margin-top: ${top}px`}
    ${({ bottom }) => bottom && `margin-bottom: ${bottom}px`}
    ${({ right }) => right && `margin-right: ${right}px`}
    ${({ left }) => left && `margin-left: ${left}px`}
`

export const Padding = styled.div`
    ${({ top }) => top && `padding-top: ${top}px;`}
    ${({ bottom }) => bottom && `padding-bottom: ${bottom}px;`}
    ${({ right }) => right && `padding-right: ${right}px;`}
    ${({ left }) => left && `padding-left: ${left}px;`}
`

export const TextWrapper = styled.div`
    color: ${colors.codGray};
    ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
    ${({ fontColor }) => fontColor && `color: ${fontColor};`}
`
