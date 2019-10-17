import styled from 'styled-components'

import { colors } from 'utils/theme'

export const StepWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    :last-child{
        flex-grow: 0;
    }
    }
`
export const StepCircle = styled.div`
    border: 1px solid ${({ success, current }) => (success && colors.success) || (current && colors.purpleDarkColor) || colors.tundora};
    width: 26px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 26px;
`

export const StepLine = styled.div`
    border-top: 1px solid ${({ success }) => (success && colors.success) || colors.tundora};
    flex-grow: 1;
    margin: 0 5px;
`
