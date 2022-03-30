export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
export type IsErrorType = string | null

const initialState = {
    status: 'idle' as RequestStatusType,
    isError: 'error' as IsErrorType,
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status};
        case 'APP/SET-ERROR':
            return {...state, isError: action.error};    
        default:
            return state
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const);
export const setErrorAC = (error: IsErrorType) => ({type: 'APP/SET-ERROR', error} as const);

export type SetStatusActionType = ReturnType<typeof setAppStatusAC>;
export type SetErrorActionType = ReturnType<typeof setErrorAC>;
type ActionsType = SetStatusActionType | SetErrorActionType;
