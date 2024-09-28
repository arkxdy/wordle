import { useEffect, useRef, useState } from "react";
import useGetStyle from "../hooks/useGetStyle";

const InputMatrix = (props: {word: string, wordSet: Set<string>, enable: boolean, handleInput: (val: string) => void}) => {
    const [input1, setInput1] = useState<string>('')
    const [input2, setInput2] = useState<string>('')
    const [input3, setInput3] = useState<string>('')
    const [input4, setInput4] = useState<string>('')
    const [input5, setInput5] = useState<string>('')

    const [style1, setStyle1] = useState({})
    const [style2, setStyle2] = useState({})
    const [style3, setStyle3] = useState({})
    const [style4, setStyle4] = useState({})
    const [style5, setStyle5] = useState({})

    const [inputIndex, setInputIndex] = useState<number>(1)
    console.log(inputIndex)
    const inputRefOne = useRef<HTMLInputElement>(null)
    //inputRefOne.current?.focus()
    const inputRefTwo = useRef<HTMLInputElement>(null)
    const inputRefThree = useRef<HTMLInputElement>(null)
    const inputRefFour = useRef<HTMLInputElement>(null)
    const inputRefFive = useRef<HTMLInputElement>(null)
    useEffect(() => {
    if(!props.enable){
        const getStyle1 = useGetStyle(props.word, props.wordSet, input1, 0);
        const getStyle2 = useGetStyle(props.word, props.wordSet, input2, 1);
        const getStyle3 = useGetStyle(props.word, props.wordSet, input3, 2);
        const getStyle4 = useGetStyle(props.word, props.wordSet, input4, 3);
        const getStyle5 = useGetStyle(props.word, props.wordSet, input5, 4);
        
        if(getStyle1 !== null) setStyle1(getStyle1)
        if(getStyle2 !== null) setStyle2(getStyle2)
        if(getStyle3 !== null) setStyle3(getStyle3)
        if(getStyle4 !== null) setStyle4(getStyle4)
        if(getStyle5 !== null) setStyle5(getStyle5)
    }
    
    },[props.enable])


    useEffect(() => {
        switch(inputIndex) {
            case 1: {
                inputRefOne.current?.focus()
                break;
            }
            case 2: {
                inputRefTwo.current?.focus()
                break;
            }
            case 3: {
                inputRefThree.current?.focus()
                break;
            }
            case 4: {
                inputRefFour.current?.focus()
                break;
            }
            case 5: {
                inputRefFive.current?.focus()
                break;
            }
            default: {
                break;
            }
        }
        //if(input1.length === 1 && inputRefTwo.current !== null) inputRefTwo.current.focus()
        const input: string = (input1 + input2 + input3 + input4 + input5).toLowerCase()
        props.handleInput(input)
          
    },[input1, input2, input3, input4, input5])
    

    return (
        <div>
        <InputBox style={style1} disable={!props.enable} handleChange={setInput1} value={input1} inputRef={inputRefOne} updateInputIndex={setInputIndex}/>
        <InputBox style={style2} disable={!props.enable} handleChange={setInput2} value={input2} inputRef={inputRefTwo} updateInputIndex={setInputIndex}/>
        <InputBox style={style3} disable={!props.enable} handleChange={setInput3} value={input3} inputRef={inputRefThree} updateInputIndex={setInputIndex}/>
        <InputBox style={style4} disable={!props.enable} handleChange={setInput4} value={input4} inputRef={inputRefFour} updateInputIndex={setInputIndex}/>
        <InputBox style={style5} disable={!props.enable} handleChange={setInput5} value={input5} inputRef={inputRefFive} updateInputIndex={setInputIndex}/>
        </div>
    )
}
export default InputMatrix;


const InputBox = (props:{style: any, disable: boolean, handleChange: (val: string) => void, value: string, inputRef: React.RefObject<HTMLInputElement>, updateInputIndex: React.Dispatch<React.SetStateAction<number>> }) => {
    const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length == 0 || ((e.target.value.charCodeAt(0) >= 65 && e.target.value.charCodeAt(0) <= 90) || (e.target.value.charCodeAt(0) >= 97 && e.target.value.charCodeAt(0) <= 122))){
            props.handleChange(e.target.value.toUpperCase())
            props.updateInputIndex((prev) => prev+1)
        }
    }
    return (
        <>
            <input className="text-box" disabled={props.disable} style={props.style} type="text" maxLength={1} onChange={(e) => updateValue(e)} value={props.value} ref={props.inputRef}></input>
        </>
    )
}
