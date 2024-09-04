import { createContext, useContext } from "react";
import { IWordle, ProviderProps } from "../utils/types";
import useGetRandomWord from "../hooks/useGetRandomWord";



const WordleConetxt = createContext<IWordle | undefined>(undefined);


export const WordleProvider = ({ children }: ProviderProps) => {
    const word = useGetRandomWord()
    const wordleValue: IWordle = {
        word: word
    }
    return (
        <WordleConetxt.Provider value={wordleValue}>
            {children}
        </WordleConetxt.Provider>
    )
}

export const useWordle = () => {
    const context = useContext(WordleConetxt);
    if(!context){
        throw new Error('useWordle must be within WordleProvider')
    }
    return context;
}

