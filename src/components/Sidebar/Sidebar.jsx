import react, { useState } from 'react';
import './SideBar.css';
import {assets} from '../../assets/assets'

const SideBar = () => {

    const[extended, setExtended] = useState(false);

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
            {extended?
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="message icon img" />
                        <p>What is react ...</p>
                    </div>
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