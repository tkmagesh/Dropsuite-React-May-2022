
import * as bugApi from '../services/bugApi';

/* export function remove(bug){
    const action = {
        type : 'BUGS_REMOVE',
        payload : bug
    }
    return action;
} */

export const remove = (bug) => async dispatch => {
    await bugApi.remove(bug);
    const action = {
        type : 'BUGS_REMOVE',
        payload : bug
    }
    dispatch(action);
}