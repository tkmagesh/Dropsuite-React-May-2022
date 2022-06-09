import * as bugApi from '../../bugs/services/bugApi'
import * as projectsApi from '../../projects/services/projectsApi';


export const loadApp = () => async (dispatch, getState) => {
    const bugs = await bugApi.getAll()
    const bugsLoadAction =  {
        type : 'BUGS_INIT',
        payload : bugs
    }
    dispatch(bugsLoadAction);

    const projects = await projectsApi.getAll();
    const projectsLoadAction = {
        type : 'PROJECTS_INIT',
        payload : projects
    }
    dispatch(projectsLoadAction);
    
    dispatch({ type : 'APP_LOADED'})
}