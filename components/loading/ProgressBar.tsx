import { LinearProgress, makeStyles } from "@material-ui/core";
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { progressBarStyles } from "../../styles/jss/style";

const useStyles = makeStyles(progressBarStyles);

const ProgressBar: FC = () => {
  const router = useRouter();
  const classes = useStyles();

  const [progress, setProgress] = useState<{ toggle: boolean; number: number }>(
    {
      toggle: true,
      number: 0,
    }
  );

  useEffect(() => {
    let flagInterval: ReturnType<typeof setInterval>;

    const handleStart = (): void => {
      setProgress({
        toggle: true,
        number: 10,
      });

      flagInterval = setInterval(
        () =>
          setProgress(({ number }) => ({ ...progress, number: number + 10 })),
        1000
      );
    };
    const handleStop = (): void => {
      setProgress({
        toggle: false,
        number: 0,
      });
      clearInterval(flagInterval);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
      handleStop();
    };
  }, [router]);

  return (
    <LinearProgress
      className={progress.toggle ? classes.root : classes.hidden}
      variant="determinate"
      value={progress.number}
    />
  );
};

export default ProgressBar;
