import * as bugApi from '../services/bugApi';

/* export function toggle(bugToToggle){
    const toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
    const action = {
        type : 'BUGS_REPLACE',
        payload : toggledBug
    }
    return action;
} */

export const toggle = (bugToToggle) => async dispatch => {
    const {id, name, createdAt, projectId} = bugToToggle
    const toggledBugData = {id, name, createdAt, projectId, isClosed : !bugToToggle.isClosed};
    const toggledBug = await bugApi.save(toggledBugData)
    const action = {
        type : 'BUGS_REPLACE',
        payload : toggledBug
    }
    dispatch(action);
}