import { createStore} from 'redux'
/* import spinnerReducer from '../spinner/reducers/spinnerReducer'; */
import bugsReducer from '../bugs/reducers/bugsReducer';

const store = createStore(bugsReducer);

export default store;