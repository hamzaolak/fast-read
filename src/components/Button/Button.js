import React from 'react'
import { FormattedMessage } from 'react-intl';

import { ButtonWrapper } from './Button.styled'
import { TextWrapper, Margin } from 'components/Layouts';

const Button = ({ leftIcon, rightIcon , ...rest}) => {
    return (
        <ButtonWrapper {...rest}>
            <Margin left="4">
                {leftIcon}
            </Margin>
            <TextWrapper fontSize="20">
                <FormattedMessage id='insertArticle.button' />
            </TextWrapper>
            <Margin right="4">
                {rightIcon}
            </Margin>
        </ButtonWrapper>
    )
}

export default Button