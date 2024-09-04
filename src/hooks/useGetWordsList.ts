import { useEffect, useState } from "react";
import wordList from '../data/words-list.txt';
import wordJsonList from '../data/5-letter-words.json';

const initialWordsSet = new Set<string>();
const useGetWordsList = () => {
    const [words, setWords] = useState(initialWordsSet)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        (async function(){
            try{
                setLoading(true)
                const res = await fetch(wordList)
                const data = await res.text()
                data.split('\n').map((item) => {
                    if(item.length === 5) setWords(prev => prev.add(item))
                });
                // wordJsonList.map((item => {
                //     if(item.length === 5) setWords(prev => prev.add(item))
                // }))
            }catch(err: any){
                setLoading(true)
                setError(err)
            }finally{
                setLoading(false)
            }
        })()
        

    },[])

    return {words, loading, error}
}

export default useGetWordsList;