import { useWordList } from "../context/WordListContext";

const useGetRandomWord = (): string => {
    const { words } = useWordList()
    const wordArray = Array.from(words)
    const index = Math.floor(Math.random() * words.size)
    return wordArray[index];
}

export default useGetRandomWord;