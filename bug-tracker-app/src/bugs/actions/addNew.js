
let _currentBugId = 3;
export function addNew(newBugName){
    const action = {
        type : 'BUGS_ADD',
        payload : {
            id : ++_currentBugId,
            name : newBugName,
            isClosed: false,
            createdAt : Date()
        }
    };
    return action;
}
