import React, { useState } from 'react'
import { injectIntl } from 'react-intl';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import Button from 'components/Button';
import { Margin, PageWrapper } from 'components/Layouts';
import { ArrowRight } from 'components/Icons';
import { TextArea } from './styled'

import { colors } from 'utils';
import { insertAticle } from './action';

const InsertArticle = ({ intl, insertArticle }) => {
    const [article, setArticle] = useState('');
    const placeholder = intl.formatMessage({ id: 'insertArticle.placeholder' });
    const tooLongWordMsg = intl.formatMessage({ id: 'insertArticle.action.tooLongWord' });

    const handleChangeArticle = ({ target: { value } }) => {
        setArticle(value)
    }
    return (
        <PageWrapper>
            <TextArea
                onChange={handleChangeArticle}
                article={article}
                placeholder={placeholder} />
            <Margin top="16">
                <Link to="/read">
                    <Button
                        height="50"
                        width="740"
                        tWidth="470"
                        mWidth="310"
                        onClick={() => insertArticle(article,tooLongWordMsg)}
                        rightIcon={<ArrowRight fill={colors.chelseaCucumber} />} />
                </Link>
            </Margin>
        </PageWrapper>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        insertArticle: (article, tooLongWord) => dispatch(insertAticle(article, tooLongWord)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(injectIntl(InsertArticle));
