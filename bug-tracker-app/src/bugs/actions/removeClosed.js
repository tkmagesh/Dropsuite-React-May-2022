
import * as bugApi from '../services/bugApi';

/* export function removeClosed(bugs){
    const bugsToRetain = bugs.filter(bug => !bug.isClosed);
    return {
        type : 'BUGS_INIT',
        payload : bugsToRetain
    };
} */

export const removeClosed = () =>  (dispatch, getState) => {
    const storeState = getState(),
        bugs = storeState.bugsState;
    const bugsToRemove = bugs.filter(bug => bug.isClosed);
    bugsToRemove.forEach( async bugToRemove => {
        await bugApi.remove(bugToRemove)
        const action = {
            type : 'BUGS_REMOVE',
            payload : bugToRemove
        };
        dispatch(action);
    })
}