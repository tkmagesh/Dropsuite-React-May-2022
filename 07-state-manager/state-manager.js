const StateManager = (function(){
    let _currentState = undefined,
        _callbacks = [],
        _reducer = null,
        _init_action = '@@INIT/ACTION';

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function')
            _callbacks.push(callback)
    }

    //private utility function
    function _notifyChanges(){
        _callbacks.forEach(callback => callback())
    }

    function dispatch(action){
        const newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        _notifyChanges()
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('reducer is mandatory to create the store');

        _reducer = reducer;
        _currentState = _reducer(undefined, _init_action) //to initialize the current state with a valid default state    
        const store = { getState, subscribe, dispatch };
        return store;
    }

    function bindActionCreators(actionCreators, dispatch){
        let actionDispatchers = {};
        for (let key in actionCreators){
            actionDispatchers[key] = function(...args){
                const action = actionCreators[key](...args);
                dispatch(action);
            }
        }
        return actionDispatchers;
    }

   /*  function combineReducers(reducers){
        const reducerKeys = Object.keys(reducers)
        return function(state = {}, action) {
            const nextState = {};
            for (let i = 0; i < reducerKeys.length; i++){
                const key = reducerKeys[i]
                const reducer = reducers[key]
                const prevStateForKey = state[key]
                const nextStateForKey = reducer(prevStateForKey, action)
                nextState[key] = nextStateForKey
            }
            return nextState;
        }
    } */

    function combineReducers(reducers){
        return function(state = {}, action) {
            const nextState = {};
            for (let key in reducers){
                nextState[key] = reducers[key](state[key], action)
            }
            return nextState;
        }
    }

    return { createStore, bindActionCreators, combineReducers };
})()