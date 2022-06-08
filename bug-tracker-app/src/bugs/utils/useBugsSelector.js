import { useSelector } from "react-redux";

function useBugsSelector(){
    const { bugs, projects } = useSelector(storeState => ({
        bugs : storeState.bugsState,
        projects : storeState.projectsState
    }));

    const bugsForView = bugs.map(bug => ({...bug, projectName : projects.find(project => project.id === bug.projectId).name}))
    return {
        bugs : bugsForView,
        projects
    }
}

export default useBugsSelector;