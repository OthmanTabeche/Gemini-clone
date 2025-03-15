import react from 'react';
import './Main.css';
import {assets} from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="user icon img" />
        </div>
        <div className="main-container">
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
        </div>
    </div>
  )
}

export default Main;