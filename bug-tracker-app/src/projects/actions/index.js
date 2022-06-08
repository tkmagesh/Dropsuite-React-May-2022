
let _currentProjectId = 2;

export function addNew(projectName){
    const newProject = { id : ++_currentProjectId, name : projectName };
    return { type : 'PROJECTS_ADD', payload : newProject}
}

export function load(){
    const initialProjectList = [
        {id : 1, name : 'Bug Tracker'},
        {id : 2, name : 'Expense Manager'}
    ]
    return {
        type : 'PROJECTS_INIT',
        payload : initialProjectList
    }
}