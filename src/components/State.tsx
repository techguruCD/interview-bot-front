import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface State {
    userToken: string | null;
}

type Action = { type: 'SET_CURRENT_USER'; payload: string | null } | { type: 'LOGIN_CURRENT_USER'; payload: string | null };

const initialState: State = {
    userToken: Cookies.get('token') ?? null,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'LOGIN_CURRENT_USER':
            if (action.payload) {
                Cookies.set('token', action.payload);
            } else {
                Cookies.remove('token');
            }
            return { ...state, userToken: action.payload };
        default:
            return state;
    }
};

const GlobalStateContext = createContext<State | undefined>(undefined);
const GlobalDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

export const useGlobalState = (): State => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};

export const useGlobalDispatch = (): React.Dispatch<Action> => {
    const context = useContext(GlobalDispatchContext);
    if (!context) {
        throw Error('useGlobalDispatch must be used within a GlobalStateProvider');
    }
    return context;
};

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};
