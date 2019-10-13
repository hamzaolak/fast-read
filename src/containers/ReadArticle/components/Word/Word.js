import styled from 'styled-components'

import { colors } from 'utils'

const Word = styled.span`
    border-color: ${({ borderColor }) => borderColor};
    border-width: ${({ noBorder }) => noBorder ? '0' : '3'}px;
    border-radius: 5px;
    border-style: solid;
    padding: 2px;
    cursor: pointer;
    
    :hover {
        background-color: ${colors.alabasterapprox};
    }
`
export default Word
