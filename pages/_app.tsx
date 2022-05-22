import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { wrapper } from "../redux/store";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { useRouter } from "next/router";
import Loading from "../components/loading/Loading";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  } else if (!router.isFallback) {
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
  }
}

export default wrapper.withRedux(MyApp);
