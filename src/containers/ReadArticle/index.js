import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
import { Step, StepList } from 'basic-react-steps'
import { last, head, find, chunk, fill } from 'lodash'
import { FormattedMessage } from 'react-intl';

import { PageWrapper, Margin } from 'components/Layouts'
import Badge from 'components/Badge';
import { ArticleWrapper, ParagraphWrapper } from './styled';
import { colors } from 'utils';
import Button from 'components/Button';
import { Arrow } from 'components/Icons';

const ReadArticle = ({ articleList }) => {
    const [currentParagraph, setCurrentParagraph] = useState(0)
    const { articleId } = useParams()
    const filteredList = find(articleList, function(article) { return article.id === articleId })
    const article = filteredList ? head(filteredList) : last(articleList)
    if (!article) window.location.href = '/'
    const { numberOfPage, wordList } = article
    const currentWordList = chunk(wordList, 200)[currentParagraph]

    const nextPage = () => {
        setCurrentParagraph(currentParagraph + 1)
    }

    const previousPage = () => {
        setCurrentParagraph(currentParagraph - 1)
    }

    return (
        <PageWrapper flexStart>
            <StepList stepNumber={currentParagraph}>
                {fill(Array(numberOfPage)).map((value, index) => <Step key={index} />)}
            </StepList>
            <ParagraphWrapper>
                {currentParagraph !== 0 &&
                    <Margin right="10">
                        <Button
                            height="50"
                            width="50"
                            onClick={() => previousPage()}
                            leftIcon={<Arrow fill={colors.chelseaCucumber} left />} >
                        </Button>
                    </Margin>}
                <ArticleWrapper>
                    {currentWordList.map((word, index) => {
                        return (
                            <Margin key={index} margin="2">
                                <Badge color={colors.purpleColor}>{word}</Badge>
                            </Margin>
                        )
                    })}
                </ArticleWrapper>
                {(currentParagraph + 1) < numberOfPage &&
                    <Margin left="10">
                        <Button
                            height="50"
                            width="50"
                            onClick={() => nextPage()}
                            rightIcon={<Arrow fill={colors.chelseaCucumber} />} >
                        </Button>
                    </Margin>}
            </ParagraphWrapper>
        </PageWrapper>
    )
}

const mapStateToProps = ({ articleList }) => ({
    articleList
})

export default connect(mapStateToProps)(ReadArticle);
