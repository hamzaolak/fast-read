import React from 'react'
import { get } from 'lodash';

import { StepWrapper, StepLine } from './Step.styled'
import { STATUS_ICON } from './constants'

const Step = ({ status }) => {
    return (
        <StepWrapper>
            {get(STATUS_ICON,status)}
            <StepLine success={status === 'success'} />
        </StepWrapper>
    )
}

export default Step