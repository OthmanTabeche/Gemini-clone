import React, { useContext, useState } from 'react';
import './SideBar.css';
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context';

const SideBar = () => {

    const[extended, setExtended] = useState(false);
    const {onSent, prevPropmt, setRecentPropmt} = useContext(Context);

    const hideSideBar = () => {
        setExtended(prev => !prev);
    }
    
  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={hideSideBar} className='menu' src={assets.menu_icon} alt="menu icon img" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="plus icon img" />
               {extended?<p>New Chat</p>:null} 
            </div>
            {extended 
                ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPropmt.map((item, index) => {
                            return (
                                <div key={index} className="recent-entry">
                                    <img src={assets.message_icon} alt="message icon img" />
                                    <p>{String(item).slice(0, 18)} ...</p>
                                </div>
                            )
                        })}
                    </div>
                :null
            }
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry" >
                <img src={assets.question_icon} alt="question icon img"/>
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry" >
                <img src={assets.history_icon} alt="history icon img"/>
                {extended?<p>History</p>:null}
            </div>
            <div className="bottom-item recent-entry" >
                <img src={assets.setting_icon} alt="setting icon img"/>
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default SideBar;