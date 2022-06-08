
import { createContext, useContext, useState, useEffect } from 'react';

let StoreContext = createContext();

export const Provider = ({ store, children } ) => {
    const [storeState, setStoreState] = useState(store.getState())
    useEffect(() => {
        store.subscribe(() => {
            setStoreState(store.getState())
        })
    }, [store])
    const ctxValue = { state: storeState, dispatch: store.dispatch };
    return (
        <StoreContext.Provider value = {ctxValue}>
            {children}
        </StoreContext.Provider>
    )
}

export function useSelector(selector) {
    const { state } = useContext(StoreContext);
    return selector(state)
}

export function useDispatch() {
    const {dispatch} = useContext(StoreContext);
    return dispatch;
}