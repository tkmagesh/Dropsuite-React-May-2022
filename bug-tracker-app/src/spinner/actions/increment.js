
export function increment(delta){
    const action = { type: 'INCREMENT', delta : delta };
    return action;
}