import React from 'react'
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
import { Step, StepList } from 'basic-react-steps'

import { PageWrapper } from 'components/Layouts'

const ReadArticle = ({ articleList }) => {
    const { articleId } = useParams();
    return (
        <PageWrapper>
            <StepList stepNumber={0}>

            </StepList>
        </PageWrapper>
    )
}

const mapStateToProps = ({ articleList }) => ({
    articleList
})

export default connect(mapStateToProps)(ReadArticle);
