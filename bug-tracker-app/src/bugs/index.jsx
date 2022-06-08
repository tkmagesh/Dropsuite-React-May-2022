import { useEffect } from 'react';
import './index.css';
import BugStats from './components/BugStats';
import BugSort from './components/BugSort';
import BugEdit from './components/BugEdit';
import BugList from './components/BugList';
import { useSelector, useDispatch } from 'react-redux';
import * as bugActionCreators from './actions';
import { bindActionCreators } from 'redux';

const Bugs = () => {

    const bugs = useSelector(storeState => storeState.bugsState);
    const { addNew, load, toggle, remove, removeClosed }  = bindActionCreators(bugActionCreators, useDispatch());

    useEffect(() => {
        load()
    }, []);
    
    return(
        <>
            <h3>Bugs</h3>
            <BugStats bugs={bugs} />             
            <BugSort/>                
            <BugEdit addNew={addNew} />      
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </>
    )
}
export default Bugs;