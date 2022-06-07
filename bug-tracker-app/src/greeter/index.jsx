import { useState } from 'react';

const Greeter = () => {
    
    const [userName, setUserName] = useState('');
    const [greetMsg, setGreetMsg] = useState('[Default greet message]');
    
    const onBtnGreetClick = () => {
        let msg = `Hi ${userName}, Have a nice day!`;
        setGreetMsg(msg);
    };

    return (
        <div>
            <h1>Greeter</h1>
            <hr />
            <label htmlFor="">User Name :</label>
            <input type="text" onChange={ evt => setUserName(evt.target.value)} />
            <span>[ {userName.length} ]</span>
            <button onClick={onBtnGreetClick}>Greet</button>
            <div className="highlight">{greetMsg}</div>
        </div>
    ); 
}

export default Greeter;