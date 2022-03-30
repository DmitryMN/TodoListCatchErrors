import React, {useState} from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, {AlertProps} from "@mui/material/Alert";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../app/store";
import { IsErrorType } from "../../app/app-reducer";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const ErrorSnackbar = () => {

    const isError = useSelector<AppRootStateType, IsErrorType>(state => state.app.isError);

    const [open, setOpen] = useState<boolean>(true);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return(
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                Error message 😠
            </Alert>
        </Snackbar>
    );
}