import React, { useContext } from 'react';
import './Main.css';
import {assets} from '../../assets/assets'
import { ssrImportKey } from 'vite/module-runner';
import { Context } from '../../context/Context';

const Main = () => {

    const {onSent, recentPropmt, showResult, loading, resultData, setInput, input} = useContext(Context);

    const handleClickSend = () => {
        onSent(input)
    }

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="user icon img" />
        </div>
        <div className="main-container">

            {!showResult ? 
                <>
                    <div className="greet">
                        <p><span>Hello Dev.</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful places to see on an upcoming trip</p>
                            <img src={assets.compass_icon} alt="compas icon img" />
                        </div>
                        <div className="card">
                            <p>Briefly summaraize this concepts: urban planning</p>
                            <img src={assets.bulb_icon} alt="compas icon img" />
                        </div>
                        <div className="card">
                            <p>Brainstrom team bonding activities for our work retreat</p>
                            <img src={assets.message_icon} alt="compas icon img" />
                        </div>
                        <div className="card">
                            <p>Improve the readibility of the following code</p>
                            <img src={assets.code_icon} alt="compas icon img" />
                        </div>  
                    </div>
                </> 
                : 
                <div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="user icon img" />
                        <p>{recentPropmt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="gemini icon" />
                        {loading
                            ?
                            <div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            :
                            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        }
                        
                    </div>
                </div>
            }
            <div className="main-bottom">
                <div className="serch-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Ask whatever you want'/>
                    <div>
                        <img src={assets.gallery_icon} alt="gallery icon img" />
                        <img src={assets.mic_icon} alt="mic icon img" />
                        <img onClick={handleClickSend} src={assets.send_icon} alt="send icon img" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate information, including omissions, mistakes, or outdated content. Always verify critical details from reliable sources before making decisions.
                    </p>
            </div>
        </div>
    </div>
  )
}

export default Main;