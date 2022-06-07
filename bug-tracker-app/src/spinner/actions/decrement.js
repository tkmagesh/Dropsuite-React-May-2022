export function decrement(delta){
    const action = { type: 'DECREMENT', delta : delta };
    return action;
}

