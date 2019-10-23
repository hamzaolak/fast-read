import React from 'react'

import { ButtonWrapper } from './styled'
import { TextWrapper, Margin } from 'components/Layouts';

const Button = ({ children, leftIcon, rightIcon , ...rest}) => {
    return (
        <ButtonWrapper {...rest}>
            <Margin left="4">
                {leftIcon}
            </Margin>
            <TextWrapper fontSize="20">
                {children}
            </TextWrapper>
            <Margin right="4">
                {rightIcon}
            </Margin>
        </ButtonWrapper>
    )
}

export default Button
