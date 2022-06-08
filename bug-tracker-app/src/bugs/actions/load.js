
export function load(){
    let initialState = [
        { id : 1, name : 'Bug - 1', isClosed : false, createdAt : Date()},
        { id: 2, name: 'Bug - 2', isClosed: true, createdAt: Date() },
        { id: 3, name: 'Bug - 3', isClosed: true, createdAt: Date() },
    ]
    return {
        type : 'BUGS_INIT',
        payload : initialState
    }
}