import { combineReducers } from 'redux'

import { articleList } from './containers/InsertArticle/reducer'
import { wordLists } from './containers/ReadArticle/reducer'

const reducers = combineReducers({
    articleList,
    wordLists
})

export default reducers
