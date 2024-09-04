const useGetStyle = (word: string, wordSet: Set<string>, val: string, index: number): {} | null => {
    if(wordSet?.has(val)){
        if(word[index] == val) {
            return {backgroundColor: 'green'}
        }else{
            return {backgroundColor: '#c65102'}
        }
    }
    return null
}

export default useGetStyle;