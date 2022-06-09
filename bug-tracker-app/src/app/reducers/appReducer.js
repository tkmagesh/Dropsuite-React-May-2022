const initialState = {
    loaded : false
}
export default function appReducer(currentState = initialState, action) {
    if (action.type === 'APP_LOADED'){
        return { loaded : true}
    }
    return currentState;
}