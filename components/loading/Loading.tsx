import { Box, CircularProgress } from "@material-ui/core";
import { FC } from "react";

const Loading: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
