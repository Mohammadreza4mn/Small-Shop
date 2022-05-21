import React from "react";
import { Snackbar, Slide, SlideProps } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { toastDown } from "../../redux/action";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectToast } from "../../redux/selectors";

const snackbarTransition = (props: JSX.IntrinsicAttributes & SlideProps) => {
  return <Slide {...props} direction="down" />;
};

const Toast = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { severity, toggle, message } = useAppSelector(selectToast);

  return (
    <Snackbar
      dir="ltr"
      open={toggle}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={6000}
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
};

export default Toast;
