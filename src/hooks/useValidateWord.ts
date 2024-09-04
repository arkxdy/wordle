import { useWordList } from "../context/WordListContext";

const useValidateWord = (word: string): boolean => {
  const { words } = useWordList()
  return words.has(word)
}

export default useValidateWord;