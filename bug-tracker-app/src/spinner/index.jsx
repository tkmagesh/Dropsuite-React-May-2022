import { useState } from 'react';

const Spinner = ({value, decrement, increment}) => {
    
    const [delta, setDelta] = useState(0);
    return (
        <div>
            <h1>Spinner</h1>
            <hr/>
            <label> Delta : </label>
            <input type="number" onChange={evt => setDelta(parseInt(evt.target.value))}/>
            <button onClick={() => decrement(delta)}>Decrement</button>
            <span> [ {value} ] </span>
            <button onClick={() => increment(delta)}>Increment</button>
        </div>
    )
}

export default Spinner;