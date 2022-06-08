
export function remove(bug){
    const action = {
        type : 'BUGS_REMOVE',
        payload : bug
    }
    return action;
}