import styled from 'styled-components'

import { colors, deviceSizes } from 'utils'

export const ButtonWrapper = styled.div`
    border-color: ${colors.primaryDarkColor};
    border-width: 2px;
    border-radius: 20px;
    border-style: solid;
    background-color: ${colors.markedColor};
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    
    ${({height}) => height && `height: ${height}px`};
    ${({width}) => width && `width: ${width}px`};
    @media (max-width: ${deviceSizes.tablet}) {
        ${({tWidth}) => tWidth && `width: ${tWidth}px`};
    }
    
    @media (max-width: ${deviceSizes.mobile}) {
        ${({mWidth}) => mWidth && `width: ${mWidth}px`};
    }

    :hover {
        background-color: ${colors.descriptionTextColor};
    }
`

