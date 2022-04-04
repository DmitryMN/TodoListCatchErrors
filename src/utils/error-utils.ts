import { Dispatch } from "redux";
import { setErrorAC,  setAppStatusAC, SetStatusActionType, SetErrorActionType} from "../app/app-reducer";


export const handleServerAppError = (dispatch: Dispatch<ErrorUtilsDispatchType>, message: string) => {
    dispatch(setErrorAC(message));
    dispatch(setAppStatusAC('failed'));
}

type ErrorUtilsDispatchType = SetStatusActionType | SetErrorActionType;