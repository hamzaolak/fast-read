import { INSERT_ARTICLE } from './InsertArticle.constants'

const initialState = {
    articleList: []
}

export const insertArticleReducer = (state = initialState, action) =>{
    switch (action.type) {
        case INSERT_ARTICLE:
            return Object.assign({}, state, { 
                articleList : [
                    ...state.articleList,
                    {
                        id: action.article.id,
                        numberOfPage: action.article.numberOfPage,
                        currentPage: action.article.currentPage,
                        wordList: action.article.wordList,
                    }
                ]
            })
        default:
            return state;
    }
}