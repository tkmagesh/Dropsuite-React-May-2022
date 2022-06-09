
/* 
export function load(){
    let initialState = [
        { id : 1, name : 'Bug - 1', isClosed : false, createdAt : Date(), projectId : 1},
        { id: 2, name: 'Bug - 2', isClosed: true, createdAt: Date(), projectId : 2 },
        { id: 3, name: 'Bug - 3', isClosed: true, createdAt: Date(), projectId : 1 },
    ]
    return {
        type : 'BUGS_INIT',
        payload : initialState
    }
} */
import * as bugApi from '../services/bugApi';

export const load = () => async dispatch => {
    const bugs = await bugApi.getAll()
    const action =  {
        type : 'BUGS_INIT',
        payload : bugs
    }
    dispatch(action);
}