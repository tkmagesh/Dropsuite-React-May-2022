
/* 
let _currentBugId = 3;
export function addNew(newBugName, projectId){
    const action = {
        type : 'BUGS_ADD',
        payload : {
            id : ++_currentBugId,
            name : newBugName,
            isClosed: false,
            createdAt : Date(),
            projectId : projectId
        }
    };
    return action;
} 
*/

import * as bugApi from '../services/bugApi'

export const addNew = (newBugName, projectId) => async dispatch => {
    const newBugData = {
        id : 0,
        name : newBugName,
        isClosed: false,
        createdAt : Date(),
        projectId : projectId
    };
    const newBug = await bugApi.save(newBugData)
    const action = {
        type : 'BUGS_ADD',
        payload : newBug
    }
    dispatch(action)
}
