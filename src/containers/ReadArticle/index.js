import React from 'react'
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
import { Step, StepList } from 'basic-react-steps'
import { last, head, find } from 'lodash'

import { PageWrapper } from 'components/Layouts'
import Badge from 'components/Badge';

const ReadArticle = ({ articleList }) => {
    const { articleId } = useParams();
    const filteredList = find(articleList, function(article) { return article.id === articleId })
    const article = filteredList ? head(filteredList) : last(articleList)
    if (!article) window.location.href = '/'
    const { numberOfPage, currentPage, wordList } = article
    return (
        <PageWrapper>
            <StepList stepNumber={currentPage}>
                {Array(numberOfPage).fill(<Step />)}
            </StepList>
            {wordList.map( word => {
                return <Badge color='#fbfcf1'>{word}</Badge>
            })}
        </PageWrapper>
    )
}

const mapStateToProps = ({ articleList }) => ({
    articleList
})

export default connect(mapStateToProps)(ReadArticle);
