import { AppProps } from 'next/app'
import '../styles/index.css'
import 'highlight.js/styles/a11y-dark.css';
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import { pageview } from  '../lib/gtag';
import { GA_TRACKING_ID } from '../lib/gtag';

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // Google Analyticsをページ遷移時にも対応させる
  const router = useRouter();
  useEffect(() => {
    console.log(process.env.NODE_ENV)
    console.log(`front: ${GA_TRACKING_ID}`)
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Component {...pageProps} />
  );
};

export default CustomApp;
