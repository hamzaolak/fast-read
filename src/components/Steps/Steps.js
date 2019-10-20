import React, { cloneElement, Children } from 'react'

import { StepsWrapper } from './Steps.styled'

const Steps = ({ children, stepNumber }) => {
    const filteredChildren = React.Children.toArray(children).filter(child => !!child);

    return (
        <StepsWrapper>
            {Children.map(filteredChildren, (child, index) => {
                const stepStatus = (stepNumber > index && 'success')
                    || (stepNumber === index && 'current')
                    || 'wait';
                const childProps = {
                    status: stepStatus
                }
                return cloneElement(child, childProps);
            })}
        </StepsWrapper>
    )
}

export default Steps