import { useWordList } from "../context/WordListContext";

const useValidateWord = (word: string): boolean => {
  const { words } = useWordList()
  return words.has(word.toLowerCase())
}

export default useValidateWord;