import * as bugApi from '../../bugs/services/bugApi'
import * as projectsApi from '../../projects/services/projectsApi';


export const loadApp = () => async (dispatch, getState) => {
    try {
        const bugs = await bugApi.getAll()
        const bugsLoadAction =  {
            type : 'BUGS_INIT',
            payload : bugs
        }
        dispatch(bugsLoadAction);
    } catch(e) {
        dispatch({ type : 'APP_ERROR', payload : 'Error loading bugs....'})
        setTimeout(() => {
            dispatch({ type : 'APP_ERROR_CLEAR'})
        },5000)
    }

    try {
        const projects = await projectsApi.getAll();
        const projectsLoadAction = {
            type : 'PROJECTS_INIT',
            payload : projects
        }
        dispatch(projectsLoadAction);
    } catch(e) {
        dispatch({ type : 'APP_ERROR', payload : 'Error loading projects....'})
        setTimeout(() => {
            dispatch({ type : 'APP_ERROR_CLEAR'})
        },5000)
    }
    
    dispatch({ type : 'APP_LOADED'})
}