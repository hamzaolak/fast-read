import styled from 'styled-components'

export const BadgeWrapper = styled.div`
    ${({ color }) => `background-color: ${color}`};
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
    }
    :active {
        opacity: 1;
    }
`
