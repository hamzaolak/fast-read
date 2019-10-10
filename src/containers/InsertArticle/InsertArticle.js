import React, { useState } from 'react'
import { injectIntl } from 'react-intl';

import Button from 'components/Button';
import { TextArea, InsertArticleWrapper } from './InsertArticle.styled'
import { Margin } from 'components/Layouts';
import { ArrowRight } from 'components/Icons';

import { colors } from 'utils';

const InsertArticle = ({ intl }) => {
    const [article, setArticle] = useState('');
    const placeholder = intl.formatMessage({ id: 'insertArticle.placeholder' });

    const handleChangeArticle = ({ target: { value } }) => {
        setArticle(value)
    }
    return (
        <InsertArticleWrapper>
            <TextArea
                onChange={handleChangeArticle}
                article={article}
                placeholder={placeholder} />
            <Margin top="16">
                <Button
                    height="50"
                    width="740"
                    tWidth="470"
                    mWidth="310"
                    rightIcon={<ArrowRight fill={colors.chelseaCucumber} />} />
            </Margin>
        </InsertArticleWrapper>
    )
}

export default injectIntl(InsertArticle);