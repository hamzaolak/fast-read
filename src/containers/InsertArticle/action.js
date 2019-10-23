import uid from 'uid'

import { INSERT_ARTICLE } from './constants'

export const insertAticle = (article, tooLongWord) => {
    const wordList = article.split(' ').map(word =>
        word.length < 30 ? word : tooLongWord)
    const numberOfPage = Math.ceil(wordList.length / 200)

    return {
        type: INSERT_ARTICLE,
        article:{
            id: uid(15),
            numberOfPage,
            wordList
        }
    }
}
