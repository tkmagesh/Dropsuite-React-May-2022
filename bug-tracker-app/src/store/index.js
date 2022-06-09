import { combineReducers, createStore, applyMiddleware} from 'redux'
/* import spinnerReducer from '../spinner/reducers/spinnerReducer'; */
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
});

/* 
function loggerMiddleware(store){
    return function(next){
        return function (action){
            console.log(action.type);
            next(action);
        }
    }
} 
*/

/* 
const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log('Before', store.getState())
    console.log('Action', action)
    next(action);
    console.log('After', store.getState())
    console.groupEnd(); 
} 
*/

/* const asyncMiddleware = store => next => action => {
    if (typeof action === 'function'){
        return action(store.dispatch, store.getState)
    }
    return next(action)
} */

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;