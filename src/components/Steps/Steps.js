import React from 'react'

import { StepsWrapper } from './Steps.styled'
import Step from './Step'

const Steps = () =>{
    return(
        <StepsWrapper>
            <Step success/>
            <Step current/>
            <Step />
        </StepsWrapper>
    )
}

export default Steps