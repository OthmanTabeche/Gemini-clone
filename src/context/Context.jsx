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

    const onSent = async (prompt) => {
        await run(input)
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