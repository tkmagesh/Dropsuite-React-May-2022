
export function removeClosed(bugs /* TO BE FIXED */){
    const bugsToRetain = bugs.filter(bug => !bug.isClosed);
    return {
        type : 'BUGS_INIT',
        payload : bugsToRetain
    };
}