import { INSERT_ARTICLE } from './constants'

const initialState = []

export const articleList = (state = initialState, action) => {
    switch (action.type) {
        case INSERT_ARTICLE:
            return Object.assign([], state,
                [
                    ...state,
                    {
                        id: action.article.id,
                        numberOfPage: action.article.numberOfPage,
                        wordList: action.article.wordList,
                    }
                ])
        default:
            return state;
    }
}