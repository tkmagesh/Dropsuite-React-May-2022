/* 
import axios from 'axios';

let _currentProjectId = 2;

export function addNew(projectName){
    const newProject = { id : ++_currentProjectId, name : projectName };
    return { type : 'PROJECTS_ADD', payload : newProject}
} */



/* 
function getInMemoryProjects(){
    const initialProjectList = [
        {id : 1, name : 'Bug Tracker'},
        {id : 2, name : 'Expense Manager'}
    ]
    return initialProjectList;
}

export function load(){

   //In memory data
    
    //const projects = getInMemoryProjects()
    //return {
    //    type : 'PROJECTS_INIT',
    //    payload : initialProjectList
    //} 

    return function(dispatch){
        //server data
        axios.get('http://localhost:3030/projects')
            .then(function(response){
                return response.data
            })
            .then(function(projects){
                console.log('got the data from server')
                const action = {
                    type : 'PROJECTS_INIT',
                    payload : projects
                }
                dispatch(action);
            })
    }
    
    
    console.log('end of load')
} */

/* 
export const load = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3030/projects')
    const projects = response.data
    const action = {
        type : 'PROJECTS_INIT',
        payload : projects
    }
    dispatch(action);
} 
*/

import * as projectsApi from '../services/projectsApi'

export const load = () => async (dispatch) => {
    const projects = await projectsApi.getAll();
    const action = {
        type : 'PROJECTS_INIT',
        payload : projects
    }
    dispatch(action);
} 

export const addNew = (projectName) => async (dispatch) => {
    const newProjectData = { id : 0, name : projectName };
    const newProject = await projectsApi.save(newProjectData)
    dispatch({ type : 'PROJECTS_ADD', payload : newProject})
}