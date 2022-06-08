import { useState } from 'react';

const BugEdit = ({addNew}) => {
    const [newBugName, setNewBugName] = useState('');
    return (
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            <label>Project : </label>
            <select>
                <option>--Select Project--</option>
            </select>
            <button onClick={() => addNew(newBugName)}>Add New</button>
        </section>  
    )
}

export default BugEdit;