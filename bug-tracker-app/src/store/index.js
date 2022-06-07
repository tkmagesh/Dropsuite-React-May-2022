import { createStore} from 'redux'
import spinnerReducer from '../spinner/reducers/spinnerReducer';


const store = createStore(spinnerReducer);

export default store;