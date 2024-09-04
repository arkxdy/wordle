import { useEffect, useState } from "react";
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
        const input: string = (input1 + input2 + input3 + input4 + input5)
        props.handleInput(input)
          
    },[input1, input2, input3, input4, input5])
    

    return (
        <div>
        <InputArray style={style1} disable={!props.enable} handleChange={setInput1}></InputArray>
        <InputArray style={style2} disable={!props.enable} handleChange={setInput2}></InputArray>
        <InputArray style={style3} disable={!props.enable} handleChange={setInput3}></InputArray>
        <InputArray style={style4} disable={!props.enable} handleChange={setInput4}></InputArray>
        <InputArray style={style5} disable={!props.enable} handleChange={setInput5}></InputArray>
        </div>
    )
}
export default InputMatrix;


const InputArray = (props:{style: any, disable: boolean, handleChange: (val: string) => void }) => {
    const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        //setValue(e.target.value)
        props.handleChange(e.target.value)
    }
    return (
        <>
            <input disabled={props.disable} style={props.style} type="text" maxLength={1} onChange={(e) => updateValue(e)}></input>
        </>
    )
}
