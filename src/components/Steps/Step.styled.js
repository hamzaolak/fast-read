import styled from 'styled-components'

import { colors } from 'utils/theme'

export const StepWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    :last-child{
        flex-grow: 0;
    }
`

export const StepLine = styled.div`
    border-top: 1px solid ${({ success }) => (success && colors.success) || colors.tundora};
    flex-grow: 1;
    margin: 0 5px;
`
