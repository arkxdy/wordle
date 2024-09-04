export interface ProviderProps {
    children: React.ReactNode,
}

export interface IWordList {
    words: Set<string>,
    validWord: (word: string) => boolean
}

export interface IWordle {
    word: string
}