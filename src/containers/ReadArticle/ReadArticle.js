import React from 'react'

import { PageWrapper } from 'components/Layouts'
import Word from './components/Word'
import { colors } from 'utils'

const ReadArticle = () => {
    return (
    <PageWrapper>
        Read Page 
        <Word borderColor={colors.guardsmanRed}>
            word
        </Word>
        <Word borderColor={colors.purpleDarkColor}>
            word2
        </Word>
        <Word noBorder>
            word3
        </Word>
    </PageWrapper>
    )}

export default ReadArticle;
