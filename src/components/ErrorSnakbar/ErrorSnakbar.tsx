import React, {useState} from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, {AlertProps} from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { AppRootStateType } from "../../app/store";
import { IsErrorType, setErrorAC } from "../../app/app-reducer";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const ErrorSnackbar = () => {

    const dispatch = useDispatch();

    const isError = useSelector<AppRootStateType, IsErrorType>(state => state.app.isError);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        // setOpen(false);
        dispatch(setErrorAC(null));
    };

    return(
        <Snackbar open={isError !== null} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {isError} 😠
            </Alert>
        </Snackbar>
    );
}