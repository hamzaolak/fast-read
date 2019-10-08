import React, { useState } from 'react'
import { injectIntl, FormattedMessage} from 'react-intl';


import { TextArea, InsertArticleWrapper } from './InsertArticle.styled'

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
        </InsertArticleWrapper>
    )
}

export default injectIntl(InsertArticle);