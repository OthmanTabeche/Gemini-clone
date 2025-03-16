import { createContext, useState } from "react";
import run from "../config/gemini";


export const Context = createContext();

const ContextProvider = (props) => {

    const[input, setInput] = useState("");
    const[recentPropmt, setRecentPropmt] = useState("");
    const[prevPropmt, setPrevPropmt] = useState([]);
    const[showResult, setShowResult] = useState(false);
    const[loading, setLoading] = useState(false);
    const[resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {

    }

    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPropmt(input)
        setPrevPropmt(prev=>[...prev, input])
        const result = await run(prompt)
        let resulrArray = result.split("**");
        let newResult = '';
        for (let i = 0; i < resulrArray.length; i++) {
            if (i === 0 || i%2 !== 1) {
                newResult += resulrArray[i]
            } else {
                newResult += "<b>" + resulrArray[i] + "</b>"
            }
        }
        let newResult2 = newResult.split("*").join("</br>")
        console.log(newResult2);
        setResultData(newResult2)
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        prevPropmt,
        setPrevPropmt,
        onSent,
        recentPropmt,
        setRecentPropmt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextValue} >
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;