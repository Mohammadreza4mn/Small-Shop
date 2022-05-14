import React from "react";
import { Snackbar, Slide } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { toastDown } from "../../redux/action";

const snackbarTransition = (props) => {
  return <Slide {...props} direction="down" />;
};

function Toast() {
  const dispatch = useDispatch();
  const { severity, toggle, message } = useSelector(({ toast }) => toast);

  return (
    <Snackbar
      dir="ltr"
      open={toggle}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={60000}
      TransitionComponent={snackbarTransition}
      onClose={() => dispatch(toastDown())}
    >
      <Alert
        variant="filled"
        severity={severity}
        onClose={() => dispatch(toastDown())}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
export default Toast;
