import { combineReducers, createStore} from 'redux'
/* import spinnerReducer from '../spinner/reducers/spinnerReducer'; */
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
});

const store = createStore(rootReducer);

export default store;