import styled from 'styled-components'

import { colors } from 'utils'

export const AppWrapper = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    height: inherit;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.purpleColor};
    height:50px;
    font-weight: bold;
    border-style: solid;
    border-width: 1px;
    border-color: ${colors.purpleDarkColor};
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow : 1;
`;
