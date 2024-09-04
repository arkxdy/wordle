import { createContext, useContext } from "react";
import { IWordList, ProviderProps } from "../utils/types";
import useGetWordsList from "../hooks/useGetWordsList";

const WordListContext = createContext<IWordList>({
    words: new Set(), 
    validWord: () => false
})

export const WordListProvider = ({ children }: ProviderProps) => {
    const { words } = useGetWordsList();
    const validWord = (word: string) => words.has(word)

    const wordListValue: IWordList = {
        words: words,
        validWord: validWord
    }
    return (
        <WordListContext.Provider value={wordListValue}>
            {children}
        </WordListContext.Provider>
    )
}

export const useWordList = () => {
    const context = useContext(WordListContext);
    if(!context){
        throw new Error('useWordList must be within WordListProvider')
    }
    return context;
}