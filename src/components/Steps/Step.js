import React from 'react'

import { StepWrapper, StepCircle, StepLine } from './Step.styled'
import { Check, Here } from 'components/Icons'

const Step = ({ success, current }) => {
    return (
        <StepWrapper>
            {(success && <Check />) || (current && <Here />) || <StepCircle success={success} current={current}></StepCircle>}
            <StepLine success={success} />
        </StepWrapper>
    )
}

export default Step