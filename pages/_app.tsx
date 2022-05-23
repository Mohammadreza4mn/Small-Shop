import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { wrapper } from "../redux/store";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { useRouter } from "next/router";
import Loading from "../components/loading/Loading";
import Error from "./_error";
import "../styles/css/global.css";
import { ReactElement } from "react";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps): ReactElement {
  const router = useRouter();

  if (router.isFallback) return <Loading />;
  else if (
    !router.isFallback &&
    (pageProps.statusCode ? pageProps.statusCode == 200 || false : true)
  )
    return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    );
  else
    return (
      <Error statusCode={pageProps.statusCode} message={pageProps.error} />
    );
}

export default wrapper.withRedux(MyApp);
