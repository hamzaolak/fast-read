import uid from 'uid'

import { INSERT_ARTICLE } from './InsertArticle.constants'

export const insertAticle = (article, tooLongWord) => {
    const wordList = article.split(' ').map(word =>
        word.length < 30 ? word : tooLongWord)
    const numberOfPage = Math.ceil(wordList.length / 100)
    const currentPage = 1

    return {
        type: INSERT_ARTICLE,
        article:{
            id: uid(15),
            numberOfPage,
            currentPage,
            wordList
        }
    }
}
