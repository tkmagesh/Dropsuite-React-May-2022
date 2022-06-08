
function bugsReducer(currentState = [], action){
    switch (action.type) {
        case 'BUGS_ADD':
            return [...currentState, action.payload];
        case 'BUGS_REPLACE':
            const bugToReplace = action.payload;
            return currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug)
        case 'BUGS_REMOVE':
            const bugToRemove = action.payload;
            return currentState.filter(bug => bug.id !== bugToRemove.id);
        case 'BUGS_INIT':
            return action.payload;
        
        default:
            break;
    }
    return currentState;
}

export default bugsReducer;