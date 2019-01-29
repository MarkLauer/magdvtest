import { SystemState, UPDATE_SESSION } from './types';

export const updateSession = (payload: SystemState) => ({
    type: UPDATE_SESSION,
    payload
});
