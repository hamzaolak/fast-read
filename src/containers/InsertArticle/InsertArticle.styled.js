import styled from 'styled-components'

import { colors, deviceSizes } from 'utils'

export const TextArea = styled.textarea`
    border-color: ${colors.purpleDarkColor};
    border-width: 1px;
    border-radius: 20px;
    height: 340px;
    font-size: 16px;
    padding: 10px;
    text-align: ${({ article }) => article ? 'left' : 'center'};
    line-height: ${({ article }) => article ? '18px' : '340px'};
    font-color: ${({ article }) => article ? colors.codGray : colors.tundora}

    &: focus {
        text-align: left;
        line-height: 18px;
    }

    width: 720px;

    @media (max-width: ${deviceSizes.tablet}) {
        width: 450px;
    }
    @media (max-width: ${deviceSizes.mobile}) {
        width: 290px;
    }
`
