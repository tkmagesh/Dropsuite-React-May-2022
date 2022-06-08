
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
