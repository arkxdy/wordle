import { useEffect, useState } from "react";
import { useWordle } from "../context/WordleContext";
import InputMatrix from "./InputMatrix";
import Congrats from "./Congrats";
import NoChanceLeft from "./NoChanceLeft";
import { useWordList } from "../context/WordListContext";

const Wordle = () => {
    const { words } = useWordList()
  //return words.has(word)
    const { word } = useWordle();
    console.log(word)
    const wordSet: Set<string> = word?.split('').reduce((acc, item) => {
        acc.add(item)
        return acc;
    },new Set<string>())
    const [match, setMatch] = useState<boolean>(false)
    const [chance, setChance] = useState<number>(6)
    const [word0, setWord0] = useState<string>('')
    const [word1, setWord1] = useState<string>('')
    const [word2, setWord2] = useState<string>('')
    const [word3, setWord3] = useState<string>('')
    const [word4, setWord4] = useState<string>('')
    const [word5, setWord5] = useState<string>('')
    const [disableSubmit, setDisableSubmit] = useState<boolean>(true)
    const [showModal, setShowModal] = useState<boolean>(false)
    //check pos3ton of words
    //check correct guessed words
    //child component to tale input 6 time repeat
    // lift state up tp get input val return bool to enable save or clear
    const handleSubmit = () => {
        if (chance === 0) {

        } else {
            setChance(prev => prev-1)
        }
        //if(word === 'ugric') setMatch(true)
    }
    //setChance()
    //setMatch('clads')
    const [enableMatrix, setEnableMatrix] = useState<boolean[]>([false, false, false, false, false, false])
    useEffect(() => {
        
        const matrix: boolean[] = enableMatrix.map((_item, index) => {
            if(index === 6-chance){
                return true;
            } else {
                return false
            }
        })
        setEnableMatrix(matrix)
        setDisableSubmit(true)
    },[chance])

    useEffect(() => {
        switch (chance) {
            case 6:
                if(word0 && word0.length === 5) {
                    if(words.has(word0)){
                        if(word === word0) setMatch(true)
                        setDisableSubmit(false)
                    }
                    else{
                        setShowModal(true)
                        setDisableSubmit(true)
                    }
                }
                else setDisableSubmit(true)
                break
            case 5:
                if(word1 && word1.length === 5) {
                    if(words.has(word1)){
                        if(word === word1) setMatch(true)
                        setDisableSubmit(false)
                    }
                    else{
                        setShowModal(true)
                        setDisableSubmit(true)
                    }
                }
                else setDisableSubmit(true)
                break
            case 4:
                if(word2 && word2.length === 5) {
                    if(words.has(word2)){
                        if(word === word2) setMatch(true)
                        setDisableSubmit(false)
                    }
                    else{
                        setShowModal(true)
                        setDisableSubmit(true)
                    }
                }
                else setDisableSubmit(true)
                break
            case 3:
                if(word3 && word3.length === 5) {
                    if(words.has(word3)){
                        if(word === word3) setMatch(true)
                        setDisableSubmit(false)
                    }
                    else{
                        setShowModal(true)
                        setDisableSubmit(true)
                    }
                }
                else setDisableSubmit(true)
                break
            case 2:
                if(word4 && word4.length === 5) {
                    if(words.has(word4)){
                        if(word === word4) setMatch(true)
                        setDisableSubmit(false)
                    }
                    else{
                        setShowModal(true)
                        setDisableSubmit(true)
                    }
                }
                else setDisableSubmit(true)
                break
            case 1:
                if(word5 && word5.length === 5) {
                    if(words.has(word5)){
                        if(word === word5) setMatch(true)
                        setDisableSubmit(false)
                    }
                    else{
                        setShowModal(true)
                        setDisableSubmit(true)
                    }
                }
                else setDisableSubmit(true)
                break
            default:
                setDisableSubmit(true)
                break
        }
    },[word0, word1, word2, word3, word4, word5])


    useEffect(() => {
        if(showModal){
            const timeout = setTimeout(() => {
                setShowModal(false)
            },2000)
            return () => clearTimeout(timeout)
        }
    },[showModal])

    if(match) return (<Congrats/>) 

    if(chance === 0) return (<NoChanceLeft/>)

    return (
        <>
        {/* <div>
        {word}
            {match && 'True'}
            {!match && 'False'}
            {chance}
        </div> */}
        <div style={{margin: '5px', fontSize: '30px', fontWeight: '600'}}>
            Wordle
        </div>
        <div>
            <InputMatrix word={word} wordSet={wordSet} enable={enableMatrix[0]} handleInput={setWord0}/>
            <InputMatrix word={word} wordSet={wordSet} enable={enableMatrix[1]} handleInput={setWord1}/>
            <InputMatrix word={word} wordSet={wordSet} enable={enableMatrix[2]} handleInput={setWord2}/>
            <InputMatrix word={word} wordSet={wordSet} enable={enableMatrix[3]} handleInput={setWord3}/>
            <InputMatrix word={word} wordSet={wordSet} enable={enableMatrix[4]} handleInput={setWord4}/>
            <InputMatrix word={word} wordSet={wordSet} enable={enableMatrix[5]} handleInput={setWord5}/>
        </div>
        <button style={{margin: '10px'}} disabled={disableSubmit} onClick={handleSubmit}>Submit</button>
        {showModal && <IncorrectWordPopup handleClose={setShowModal}/>}
        </>
    )
}

export default Wordle;


const IncorrectWordPopup = (props:{handleClose: (val:boolean) => void}) => {
    const close = () => {
        props.handleClose(false)
    }

    return (
        <>
            <div className="word-popup">
                <div className="cross-popup">
                    <img onClick={close} style={{width: '10px', cursor: 'pointer'}} src='src\assets\close.png'></img>
                </div>
                <div className="text-popup">
                    Please use a valid word
                </div>
            </div>
        </>
    )
}
