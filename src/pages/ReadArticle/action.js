import { MARK_WORD, READ_WORD } from "./const";

export const markWord = (word) => ({
    type: MARK_WORD,
    word
})

export const readWord = (word) =>({
    type: READ_WORD,
    word
})
