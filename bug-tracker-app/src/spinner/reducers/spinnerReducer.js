function spinnerReducer(currentState = 100, action) {
    if (action.type === 'INCREMENT') {
        return currentState + action.delta;
    }
    if (action.type === 'DECREMENT') {
        return currentState - action.delta;
    }
    return currentState;
}

export default spinnerReducer;