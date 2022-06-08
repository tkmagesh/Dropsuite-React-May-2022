import { useState } from 'react';

const BugEdit = ({addNew, projects}) => {
    const [newBugName, setNewBugName] = useState('');
    const [selectedProject, setSelectedProject] = useState(0);

    return (
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            <label>Project : </label>
            <select onChange={evt => setSelectedProject(parseInt(evt.target.value))}>
                <option>--Select Project--</option>
                { projects.map(project => <option key={project.id} value={project.id} >{project.name}</option>)}
            </select>
            <button onClick={() => addNew(newBugName, selectedProject)}>Add New</button>
        </section>  
    )
}

export default BugEdit;