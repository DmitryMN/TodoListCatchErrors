import { Dispatch } from "redux";
import { setErrorAC,  setAppStatusAC, SetStatusActionType, SetErrorActionType} from "../app/app-reducer";
import {ResponseType} from "../api/todolists-api";


export const handleServerNetworkError = (dispatch: Dispatch<ErrorUtilsDispatchType>, message: string) => {
    dispatch(setErrorAC(message));
    dispatch(setAppStatusAC('failed'));
}

export const handleServerAppError = <T>(dispatch: Dispatch<ErrorUtilsDispatchType>, data: ResponseType<T>) => {
    if(data.messages.length) {
        dispatch(setErrorAC(data.messages[0]));
    } else {
        dispatch(setErrorAC("Some error occurred"));
    }
}

type ErrorUtilsDispatchType = SetStatusActionType | SetErrorActionType;