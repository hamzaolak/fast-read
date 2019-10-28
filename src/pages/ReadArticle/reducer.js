import { MARK_WORD, READ_WORD } from "./const"

const initialState = {
    markedWordList: [],
    readWordList: [],
}

export const wordLists = (state = initialState, action) => {
    switch (action.type) {
        case MARK_WORD:
            return { ...state, markedWordList: [...state.markedWordList, action.word]}
        case READ_WORD:
            return { ...state, readWordList: [...state.readWordList, action.word] }
        default:
            return state;
    }
}