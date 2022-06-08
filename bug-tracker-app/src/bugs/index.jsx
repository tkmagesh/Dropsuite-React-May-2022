import { useEffect } from 'react';
import './index.css';
import BugStats from './components/BugStats';
import BugSort from './components/BugSort';
import BugEdit from './components/BugEdit';
import BugList from './components/BugList';
import { useDispatch } from 'react-redux';
import * as bugActionCreators from './actions';
import { bindActionCreators } from 'redux';
import useBugsSelector from './utils/useBugsSelector';

const Bugs = () => {

    const { addNew, load, toggle, remove, removeClosed }  = bindActionCreators(bugActionCreators, useDispatch());
    const { bugs, projects } = useBugsSelector();

    useEffect(() => {
        load()
    }, []);
    
    return(
        <>
            <h3>Bugs</h3>
            <BugStats bugs={bugs} />             
            <BugSort/>                
            <BugEdit addNew={addNew} projects={projects} />      
            <BugList {...{bugs : bugs, toggle, remove, removeClosed}} />
        </>
    )
}
export default Bugs;