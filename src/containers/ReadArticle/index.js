import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
import { Step, StepList } from 'basic-react-steps'
import { last, head, find, chunk } from 'lodash'

import { PageWrapper, Margin } from 'components/Layouts'
import Badge from 'components/Badge';
import { ArticleWrapper } from './styled';
import { colors } from 'utils';

const ReadArticle = ({ articleList }) => {
    const [currentParagraph, setCurrentParagraph] = useState(0)
    const { articleId } = useParams()
    const filteredList = find(articleList, function(article) { return article.id === articleId })
    const article = filteredList ? head(filteredList) : last(articleList)
    if (!article) window.location.href = '/'
    const { numberOfPage , wordList } = article
    const currentWordList = chunk(wordList, 200)[currentParagraph]

    return (
        <PageWrapper flexStart>
            <StepList stepNumber={currentParagraph}>
                {Array(numberOfPage).fill(<Step />)}
            </StepList>
            <ArticleWrapper>
                {currentWordList.map(word => {
                    return (
                        <Margin margin="2">
                            <Badge color={colors.purpleColor}>{word}</Badge>
                        </Margin>
                    )
                })}
            </ArticleWrapper>
        </PageWrapper>
    )
}

const mapStateToProps = ({ articleList }) => ({
    articleList
})

export default connect(mapStateToProps)(ReadArticle);
