import React from 'react'

import { BadgeWrapper } from './Badge.styled'

const Badge = ({ color, ...rest}) => {
    return (
        <BadgeWrapper {...rest} color={color} ></BadgeWrapper>
    )
}

export default Badge
