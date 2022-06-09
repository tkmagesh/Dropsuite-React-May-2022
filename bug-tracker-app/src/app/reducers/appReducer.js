const initialState = {
    loaded : false,
    error : ''
}
export default function appReducer(currentState = initialState, action) {
    if (action.type === 'APP_LOADED'){
        return { ...currentState, loaded : true}
    }
    if (action.type === 'APP_ERROR'){
        return { ...currentState, error : action.payload}
    }
    if (action.type === 'APP_ERROR_CLEAR'){
        return { ...currentState, error : ''}
    }
    return currentState;
}