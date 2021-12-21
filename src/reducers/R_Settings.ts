import { createContext, Dispatch } from 'react';
import { t } from './incoming';

export type Payload = Partial<{
    [K in keyof State]: State[K] | null;
}>;

type Action = {
    type: act;
    payload?: any;
};
export enum act { 
    'set-state',
}

export type State = {
    active_div: null | string; // eg - Clicking on empty area should close dropdowns, modals, etc. When null, it says nothing should be open.
    window_is_visible: boolean | null;
    screen: string;
};

export const initialState: State = {
    active_div: null,
    window_is_visible: null, 
    screen : window.innerWidth < 420 ? 'mobile' :'desktop'
};

export const reducer = (state: State, action: Action) => {
    let newState = { ...state };
    const { payload, type } = action;
    const payload_checker = () => {
        // when a payload is must
        if (!payload) {
            alert('Payload is empty. This should not happen');
            return newState;
        }
    };
    switch (type) {
         
        case act['set-state']:
            newState = {
                ...newState,
                ...payload,
            };
            break;
        default:
            break;
    }
    return newState;
};

export const StateContext = createContext(initialState);
export const DispatchContext = createContext<Dispatch<Action> | null>(null);
