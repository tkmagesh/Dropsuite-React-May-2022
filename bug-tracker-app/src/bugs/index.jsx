import { useEffect } from 'react';
import './index.css';
import BugStats from './components/BugStats';
import BugSort from './components/BugSort';
import BugEdit from './components/BugEdit';
import BugList from './components/BugList';


const Bugs = ({bugs, load, addNew, toggle, remove, removeClosed}) => {
    useEffect(() => {
        load()
    }, [load]);
    
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