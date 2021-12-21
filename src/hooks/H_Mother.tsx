import { useContext, useCallback } from 'react';
import { r } from './incoming'; 

export const Mother = () => {

    const state_settings = useContext(r.settings.StateContext);
    const dispatch_settings = useContext(r.settings.DispatchContext)!;

    const set_settings = useCallback(
        (payload: r.settings.Payload) => {
            dispatch_settings({
                type: r.settings.act['set-state'],
                payload,
            });
        },
        [dispatch_settings]
    ); 

    return {
        set_settings, 
        state_settings,
    };
};
