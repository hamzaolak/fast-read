import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
import { Step, StepList } from 'basic-react-steps'
import { last, head, find, chunk, fill, lowerCase } from 'lodash'

import { markWord, readWord } from './action'

import { PageWrapper, Margin } from 'components/Layouts'
import Badge from 'components/Badge';
import Button from 'components/Button';
import { Arrow } from 'components/Icons';
import { ArticleWrapper, ParagraphWrapper } from './styled';

import { colors } from 'utils';

const ReadArticle = ({ articleList, markWord, readWord, markedWordList, readWordList }) => {
    const [currentParagraph, setCurrentParagraph] = useState(0)
    const { articleId } = useParams()
    const filteredList = find(articleList, function(article) { return article.id === articleId })
    const article = filteredList ? head(filteredList) : last(articleList)
    if (!article) window.location.href = '/'
    const { numberOfPage, wordList } = article
    const currentWordList = chunk(wordList, 200)[currentParagraph]

    const nextPage = () => {
        currentWordList.forEach(word => {
            const lowerWord = lowerCase(word)
            !isMarked(lowerWord) && readWord(lowerWord)
        })
        setCurrentParagraph(currentParagraph + 1)
    }

    const previousPage = () => {
        setCurrentParagraph(currentParagraph - 1)
    }

    const markWordWithFilter = (word) => {
        const lowerWord = lowerCase(word)
        const index = markedWordList.indexOf(lowerWord)
        index === -1 && markWord(lowerWord)
    }

    const isMarked = (word) => {
        const lowerWord = lowerCase(word)
        const index = markedWordList.indexOf(lowerWord)
        return index !== -1
    }

    const isReadWord = (word) => {
        const lowerWord = lowerCase(word)
        const index = readWordList.indexOf(lowerWord)
        return index !== -1
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
                            leftIcon={<Arrow fill={colors.secondaryDarkColor} left />} >
                        </Button>
                    </Margin>}
                <ArticleWrapper>
                    {currentWordList.map((word, index) => {
                        return (
                            <Margin key={index} margin="2">
                                <Badge
                                    color={(isMarked(word) && colors.secondaryDarkColor) || (isReadWord(word) && 'transparent') || colors.primaryColor}
                                    onClick={() => markWordWithFilter(word)}>{word}</Badge>
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
                            rightIcon={<Arrow fill={colors.secondaryDarkColor} />} >
                        </Button>
                    </Margin>}
            </ParagraphWrapper>
        </PageWrapper>
    )
}

const mapStateToProps = ({ articleList, wordLists: { markedWordList, readWordList } }) => ({
    articleList,
    markedWordList,
    readWordList
})

const mapDispatchToProps = dispatch => ({
    markWord: (word) => dispatch(markWord(word)),
    readWord: (word) => dispatch(readWord(word))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadArticle);
