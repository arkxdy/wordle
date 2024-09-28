const useGetStyle = (word: string, wordSet: Set<string>, val: string, index: number): {} | null => {
    if(wordSet?.has(val.toLowerCase())){
        if(word[index] == val.toLowerCase()) {
            return {backgroundColor: 'green'}
        }else{
            return {backgroundColor: '#c65102'}
        }
    }
    return null
}

export default useGetStyle;