import { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import * as projectActionCreators from './actions';

import './index.css';

const Projects = () => {
    const [newProjectName, setNewProjectName] = useState('');
    const projects = useSelector(storeState => storeState.projectsState);
    const {load, addNew} = bindActionCreators(projectActionCreators, useDispatch());
    
    useEffect(() => {
        load()
    },[]);

    return (
        <div>
            <h3>Projects</h3>
            <label htmlFor="">Project Name :</label>
            <input type="text" onChange={ evt => setNewProjectName(evt.target.value) }/>
            <button onClick={() => addNew(newProjectName)}>Add New</button>
            <ol>
                {projects.map(project => (<li key={project.id}>{project.name}</li>))}
            </ol>
        </div>
    );
}

export default Projects;