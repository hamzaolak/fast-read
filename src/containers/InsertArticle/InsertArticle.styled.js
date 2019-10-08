import styled from 'styled-components'

import { colors } from 'utils'

export const InsertArticleWrapper = styled.div`
    display: flex;
    flex-flow: column;
    flex-grow: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const TextArea = styled.textarea`
    border-color: ${colors.purpleDarkColor};
    border-width: 1px;
    border-radius: 20px;
    height: 340px;
    width: 720px;
    font-size: 16px;
    padding: 20px;
    text-align: ${({ article }) => article ? 'left' : 'center'};
    line-height: ${({ article }) => article ? '18px' : '340px'};
    font-color: ${({ article }) => article ? colors.codGray : colors.tundora}

    &: focus {
        text-align: left;
        line-height: 18px;
    }

    @media (max-width: 720px) {
        width: 80%;
    }
`