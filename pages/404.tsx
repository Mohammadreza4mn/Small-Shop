import { Button, Box, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export default function Custom404(): ReactElement {
  const Router = useRouter();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="80vh"
    >
      <Typography variant="subtitle1" gutterBottom>
        صفحه مورد نظر پیدا نشد
      </Typography>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => Router.back()}
      >
        بازگشت به صفحه قبل
      </Button>
    </Box>
  );
}
